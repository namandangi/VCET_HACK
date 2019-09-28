var   express       = require('express'),
passport      = require('passport')
router        = express.Router({mergeParams:true}),
User          = require('../models/user'),
Scholarship   = require('../models/scholarships'),
Post          = require('../models/post'),
UserData      = require('../models/userData');

router.get('/',(req,res)=>{
  req.flash('success','welcome to home page');
  res.render('home');
});


//SHOW THE SIGNUP FORM
router.get('/signup',(req,res)=>{
res.render('signup');
});

//HANDLE THE SIGNUP LOGIC
router.post("/signup", function(req, res){
var newUser = new User(
  {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      username: req.body.username,
      password : req.body.password,
      phone : req.body.phone,
      dob : req.body.dob,
      gender : req.body.gender
  });                
  console.log(newUser);
  var newUser1 = new User({username: req.body.username});
UserData.create(newUser, (err, user)=>{
  if(err)
  {
      console.log(err);
      return res.redirect("/signup");
  }
  else{
  User.register(newUser1, req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.redirect("/signup");
      }
      passport.authenticate("local")(req, res, function(){
         res.redirect("/"); 
      });
  });
}
});
});

  //SHOW LOGIN FORM
  router.get('/login',(req,res)=>{
      res.render('login');
  });

  //HANDLE LOGIN LOGIC
  router.post("/login", passport.authenticate("local", 
   {
       //successRedirect: "/",
       failureRedirect: "/login"
      }), function(req, res){
        req.flash("success","You have successfully logged in !");
          //console.log(currentUser);
          res.redirect('/');
  });

//HANDLE THE LOGOUT LOGIC
router.get("/logout", function(req, res){
req.logout();
req.flash("success","You have successfully logged out !");
res.redirect("/login");
});

//SAVE
// router.get('/save/:id',(req,res)=>{
//   Scholarship.findById(req.params.id,(err,fs)=>{
//    var singleSname = fs.scholarshipName;
//     Post.findOneAndUpdate(fs.scholarshipName,fs.scholarshipName.push(singleSname),(err,post)=>{
//       console.log(post);
//     });
//     console.log((fs.scholarshipName,fs.portalLink));
//   });
//   // postId = req.params.id;
//    //console.log(postId);
// });

//PROFILE
router.get('/profile/:id',(req,res)=>{
  User.findById(req.params.id,(err,user)=>{
    var nms = user.username;
    UserData.find({username:nms},(err,data)=>{
      console.log(nms);
      res.render('profile',{data : data});
    });
  });
})
  


//FILTER PAGE
router.get('/filter',(req,res)=>{
  Scholarship.find({},(err,allScholarships)=>{
      res.render('filter',{scholarshipData:allScholarships});
  })
});

//FAQs
router.get('/faqs',(req,res)=>{
res.render('faqs');
});

//PRIVACY-POLICY
router.get('/privacy',(req,res)=>{
res.render('privacy');
});

//T&C
router.get('/tnc',(req,res)=>{
res.render('termsnc');
});


module.exports = router;