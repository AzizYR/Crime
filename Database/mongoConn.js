'use strict';

const mongoose = require('mongoose');
var dbConfig = require('../Config/db');

console.log('trying to connect to db..');

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
});

var mongoConn = mongoose.connection;

mongoConn.on('error', console.error.bind(console, 'Connection error: '));
mongoConn.once('open', function(callback) {
    console.log('Successfully connected to MongoDB /.');
});

module.exports = mongoConn;
