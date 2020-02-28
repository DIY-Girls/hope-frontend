const express = require('express');
const path = require('path');
const cors = require('cors');
const serveStatic = require('serve-static');app = express();

app.use(cors());
app.use(serveStatic(__dirname + "/dist"));

// Here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// This * route is to server project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})
const port = process.env.PORT || 5000;
app.listen(port);console.log('server started '+ port);