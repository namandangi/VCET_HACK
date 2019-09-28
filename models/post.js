const mongoose                    = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var PostSchema = mongoose.Schema({
    scholarshipName : [String],
    portalLink : [String],
});

PostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post',PostSchema);