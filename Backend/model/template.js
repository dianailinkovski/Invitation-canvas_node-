var mongoose = require('mongoose');
var Schema = mongoose.Schema;

templateSchema = new Schema( {
	title: String,
	desc: String,
	date: Date ,
	clock: String,
	location: String,
	image: String,
	user_id: Schema.ObjectId,
	// is_delete: { type: Boolean, default: false },
	// date : { type : Date, default: Date.now }
}),
template = mongoose.model('template', templateSchema);

module.exports = template;