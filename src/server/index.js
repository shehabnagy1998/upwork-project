const express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../build')));

app.listen(port, _ => { console.log(`listen on port ${port}`); })