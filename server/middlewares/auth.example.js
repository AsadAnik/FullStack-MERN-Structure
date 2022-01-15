// Auth Middleware..
exports.auth = function(req, res, next){
	// Middleware Body..
	console.log('Auth Middlware!');
	next();
};