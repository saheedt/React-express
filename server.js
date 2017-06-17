'use strict';

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname,'index.html'));
})

app.listen(port);

console.log('simple react running on port: ', port);