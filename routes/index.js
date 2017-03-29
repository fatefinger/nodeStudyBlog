/**
 * Created by 53235 on 2017/3/29.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello, express');
});

module.exports = router;