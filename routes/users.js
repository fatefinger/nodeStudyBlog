/**
 * Created by 53235 on 2017/3/29.
 */
var express = require('express');
var router = express.Router();
// <!--<% code %>：运行 JavaScript 代码，不输出
// <%= code %>：显示转义后的 HTML内容
// <%- code %>：显示原始 HTML 内容-->
router.get('/:name', function(req, res) {//此处:name与req.params.name对应
    res.render('users', {//render函数用以渲染ejs模板，args[0]为模板名字'A'，匹配'A.js',第二个参数使传给模板的数据
        id: req.params.name//此处id与ejs中的id对应
    });
});

module.exports = router;