var express = require('express')
const passport = require('passport')
var router = express.Router()
// require('../passport.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main page' })
})

module.exports = router
