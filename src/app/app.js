var express = require('express')
var mongoose = require('mongoose')
var formidable = require('formidable')
var app = express();

// mongoose.connect("mongodb://localhost/mysystem");
app.get("/login" , (req,res) => {
	console.log('454')
	var _callback = req.query.callback;
	console.log(_callback)
	// res.send(_callback({"status" : true , "user" : "admins"}))
}
	// console.log(req,res)
	// var form = new formidable.IncomingForm()
	// form.parse(req, function(err , fields , files){
	// 	console.log(fields ,files)
	// })
)
app.listen(3000,(err) => {
	if(!err){
		console.log('程序已运行在3000端口');
	}
})