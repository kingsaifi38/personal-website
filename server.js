var express = require('express');
var app = express()
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(8587, () => console.log('Example app listening on port http://localhost:8587!'));