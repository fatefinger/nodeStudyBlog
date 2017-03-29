/**
 * Created by YangFan on 2017/3/29.
 */
var express=require('express');
var app=express();

app.get('/',function (req,res) {
res.send('hellp express 132')
});

app.listen(3000);