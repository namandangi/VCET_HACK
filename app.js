var   express                 = require('express'),
        bodyParser              = require('body-parser'),
        mongoose                = require('mongoose'),
        methodOverride          = require('method-override'),
        flash                   = require('connect-flash'),
       // routes                  = require("express-session"),
        User                    = require('./models/user'),
        passport                = require('passport'),
        LocalStrategy           = require('passport-local'),
        SendOtp                 = require('sendotp'),
        app                     = express();

        require('dotenv').config({ path: 'variables.env' });
        const path = require('path');
        const webPush = require('web-push');

        mongoose.connect('mongodb://localhost:27017/sp', {useNewUrlParser: true} );
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.use(express.static(__dirname + "/public"));
        app.use(express.static(path.join(__dirname, 'client')));
        app.use(methodOverride("_method"));
        app.set("view engine", "ejs");
        app.use(flash());
        var  indexRoutes         = require('./routes/index');
        var scholarshipRoutes    = require('./routes/scholarships');

        

        const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
        const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
    

        //OTP AUTH 
        // webPush.setVapidDetails('mailto:danginaman55@gmail.com', publicVapidKey, privateVapidKey);
    
        // const sendOtp = new SendOtp('296255AbRdwOOE5Bb5d8eaf5a');
        // sendOtp.send("919930388026", "PRIIND", "6969", function (error, data) {
        //     console.log(data);
        //   });

        //  sendOtp.setOtpExpiry('90');

        //   sendOtp.retry("919930388026", false, function (error, data) {
        //     console.log(data);
        //   });

        //   sendOtp.verify("919930388026", "6969", function (error, data) {
        //     console.log(data); // data object with keys 'message' and 'type'
        //     if(data.type == 'success') console.log('OTP verified successfully')
        //     if(data.type == 'error') console.log('OTP verification failed')
        //   });
          
    

        // PASSPORT CONFIGURATION
            app.use(require('express-session')({
            secret: 'El Psy Congroo',
            resave: false,
            saveUninitialized: false
        }));

        app.use(passport.initialize());
        app.use(passport.session());
        //passport.use(User.createStrategy());
        passport.use(new LocalStrategy(User.authenticate()));
        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());

        app.use((req, res, next)=>{
        res.locals.currentUser = req.user;
         res.locals.error = req.flash("error");
         res.locals.success = req.flash("success");
        next();
        });

        app.use('/',indexRoutes);
        app.use(scholarshipRoutes);
      

        app.listen(process.env.PORT||3000,process.env.IP,()=>{
            console.log('Listening on Port 3000');
        });