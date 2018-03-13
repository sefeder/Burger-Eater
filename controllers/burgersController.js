var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

//this is the users_controller.js file
//couponsController
router.get('/', function(req,res) {
	

	var query = "SELECT * FROM burgers"

	connection.query(query, function(err, burgers) {
		res.render('index', {
			burgers: burgers,
			
		});

	});
});

//buying a coupon
router.post('/create', function(req,res) {
		var query = "INSERT INTO burgers (burger_name) VALUES (?)"

		connection.query(query, [ req.body.burger_name ], function(err, response) {
			res.redirect('/burgers');
		});
	
});


module.exports = router;
