const   mongoose                  = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

// var category ={
// degree : ['UnderGraduate','PostGraduate','PhD'],
// gender : ['Male','Female','Other'],
// classification : ['Need Based','Merit Based','Means Based'],
// country : ['National','International']
// }

var ScholarshipSchema = new mongoose.Schema({
    scholarshipName : String,
    scholarshipProvider : String,
    whoCanApply : [String],
    benefits : [String],    
    category : {
        name : String,
        categoryName : String
    },
    portalLink : String
});

ScholarshipSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Scholarship',ScholarshipSchema);