const passport = require('passport')
var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a users resource');
// });
/* GET users page. */
router.get('/', checkAuthenticated, (req, res) => {
  res.render('users')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // return next()
    return res.render('users')
  }
  console.log('Неавторизованный пользователь')
  res.redirect('/')
}


module.exports = router;
