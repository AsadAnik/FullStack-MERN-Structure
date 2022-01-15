const express = require('./config/express.js'),
	app = express.init();

// Use ENV PORT or default..
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

// listening server..
app.listen(PORT, () => {
	console.log(`Server is now running on http://${HOST}:${PORT}`);
});