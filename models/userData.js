const mongoose                    = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var UserDataSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String,
    username : String,
    phone : Number,
    dob : String,
    gender:String ,
    password : String,
    // post : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Post'
    // }
    postName : [String],
    postLink : [String]
});

UserDataSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserData',UserDataSchema);
