var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	body: String,
	comments: []
});

module.exports = mongoose.model('Post',PostSchema);
