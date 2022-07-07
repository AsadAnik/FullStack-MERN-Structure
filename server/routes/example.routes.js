const express = require('express'),
	router = express.Router(),
	Controller = require('../controllers/example.controller.js'),
	AuthMiddleware = require('../middlewares/auth.example.js');

// Middleware..
const Auth = AuthMiddleware.auth;

// Controllers..
const HomeController = Controller.home;
const AboutController = Controller.about;


// Home route..
router.get('/', HomeController);

// About route..
router.get('/about', Auth, AboutController);


module.exports = router;