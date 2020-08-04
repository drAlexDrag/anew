const passport = require('passport')
var express = require('express');
var router = express.Router();

router.get('/', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user) {
    if (err) {
    	return next(err);
    }
    if (!user) {
    	return res.redirect('/');
    	console.log(user);
    }
    req.logIn(user, function(err) {
      if (err) {
      	return next(err);
      }
      return res.redirect('/users');
    });
  })(req, res, next);
});
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
console.log(res)
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
module.exports = router;