var express = require('express');
var router = express.Router();

/* GET logout page. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a users resource');
// });
router.get('/', (req,res) => {
	req.logout();
	// res.send('respond with a users resource');
	res.redirect('/');
});


module.exports = router;