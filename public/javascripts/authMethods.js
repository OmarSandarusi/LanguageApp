function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); 
  }
  res.redirect('/auth/facebook');
}

module.exports = {
    ensureAuthenticated: ensureAuthenticated
};