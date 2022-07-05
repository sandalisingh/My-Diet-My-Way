const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/DietDB", { useNewUrlParser: true});

module.exports.BLOGS_DB = require('./MODELS/BLOGS_DB');
module.exports.USERS_DB = require('./MODELS/USERS_DB');
