var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var path = require('path');

var indexRouter = require('./Routes/indexRouter');
var authRouter = require('./Routes/authRouter');
var doctorRouter = require('./Routes/doctorRouter');

var {verifyUser} = require('./Controllers/authController');
var {dashboard} = require('./Controllers/doctorController');

var app = express();
app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'pages')));

// app.use(express.static(__dirname+"/public/pages"));

var db = require('./Database/mongoConn');

//token checking middleware
app.use('/',verifyUser,indexRouter);
app.use('/auth',authRouter);
app.use('/doctor',doctorRouter);


app.listen(process.env.PORT || 6000, function() {
    console.log("Express server listening on port " + 6000);
});      
