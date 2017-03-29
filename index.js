/**
 * Created by YangFan on 2017/3/29.
 */
var path = require('path');
//引入express
var express = require('express');
//express#app
var app = express();
//require(id)返回一个function,这个function为该模块的expect=module.expect=
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs
//路由
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000);