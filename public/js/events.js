function googTranslate(){
    var qry = document.getElementById("query").value;
    getTranslated(qry);
}

function getTranslated(text){
    $( ".word" ).remove();
    $(".panel").remove();
    var qry = text.replace(" ", "%20");
    var url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyC4yj2gSTHnyoSKVd90yik-ryZZMA_5z3E&source=en&target=fr&q=" + qry;
    $.get( url, function( data ) {
        var words = data.data.translations[0].translatedText.split(" ");
        var newLine= $("<p>").appendTo($('.transTextContainer'));
        for (var i = 0; i<words.length; i++){
            var id = 'translatedText' + i.toString();
            var newP = $("<p>").attr('id', id).text(words[i]+" ").attr("class", "word").attr("onclick", "updateHelp(this)").appendTo($('.transTextContainer'));
        }
    });
}
function updateHelp(word){
    var elementsToChange = document.getElementsByClassName("word");
    for (var i=0; i<elementsToChange.length;i++){
        if($(elementsToChange[i]).hasClass("word-selected")){
            $(elementsToChange[i]).removeClass("word-selected");
        }
    }
    $(word).addClass("word-selected");
    var definition;
    var helpWord = word.innerHTML.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
    var transUrl = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyC4yj2gSTHnyoSKVd90yik-ryZZMA_5z3E&source=fr&target=en&q=" + helpWord;
    $.get( transUrl, function( data ) {
        var word2def = data.data.translations[0].translatedText;
        $.ajax({
            url: '../api/define',
            method: "GET",
            data: {word: word2def},
            dataType: "json"
            }).done(function(eodRes){
                var eodBodyObj = JSON.parse(eodRes.body);
                definition = eodBodyObj.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
                var defHelpBoxHTML = "<div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title'>Definition</h3></div><div class='panel-body' id='def'>"+helpWord+': '+definition+"</div></div>";
                defHelpBoxBool = document.getElementById("def");
                if(!defHelpBoxBool){
                    $('#HelpWindow').append(defHelpBoxHTML)
                }
                else{
                    document.getElementById('def').innerHTML = helpWord+': '+definition;
                }
            })
    })

    
}
