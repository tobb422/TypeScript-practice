var express = require("express");

const app = express();

const server = app.listen(3000, () => console.log("a"));
app.get('/', function(req, res) {
    res.send('hello world');
});
