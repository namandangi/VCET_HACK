var  express     = require('express');
var Scholarship  = require('../models/scholarships');
var router  = express.Router();


var data =[
    {
        scholarshipName: 'AICTE PG (GATE/GPAT) Scholarship 2019-20',
        scholarshipProvider : 'All India Council for Technical Education, Ministry of Human Resource and Development (MHRD).',
        whoCanApply : ['Have obtained a valid score in GATE/GPAT examination.',
        'Have taken admission in the 1st year of M.Tech./M.E./M.Pharma/M.Arch. courses at an AICTE recognized institution in the academic year 2019-20. ​​​​​​​'
                        ],
        benefits : ['get a monthly stipend of INR 12,400 per month for the duration of two years or the duration of the course, whichever is lower.'
        ],
        category : {name:'classification', categoryName :'Merit Based'},
        portalLink : 'https://portal.aicte-india.org/partnerportal_nv_enu/start.swe?SWEVI=&SWEBHWND=&SWECmd=Refresh&SRN=&SWERF=1&SWEFullRefresh=1&TglPrtclRfrsh=1',
    },
    {
        scholarshipName: 'Nirankari Rajmata Scholarship Scheme 2019-20',
        scholarshipProvider : 'Sant Nirankari Charitable Foundation.',
        whoCanApply : ['Be a regular student of a government recognised institution/college in which he/she is admitted through a competitive written test. ',
        'Have secured at least 90% marks in class 12 examination.',
        'Have an annual family income less than INR 3.50 Lakhs from all sources.'
                        ],
        benefits : ['The selected scholars will receive some or full amount of their tuition fees. '
        ],
        category : {name:'classification', categoryName :'Means Based'},
        portalLink : 'https://nirankarifoundation.org/wp-content/uploads/2019/05/Nirankari-Rajmata-Scholarship-Scheme-2019-20.pdf'        
    },
    {
        scholarshipName: 'National Meritorious Invention Awards NRDC 2019',
        scholarshipProvider : 'National Research Development Corporation (NRDC)',
        whoCanApply : ['Be a professional involved in IP driven innovation, premium innovation, innovation in the high tech area.',
        'Be a professional working in fields of agriculture, environment, rural milieu, energy, medical, any other discipline having societal impact/importance.',
        'Be registered for Bachelors, Masters or Doctoral (PhD) Degree in academic institutions, research institutions, universities or affiliated colleges at the time of applying',
        'Be below 28 years of age',
        'Forward his/her application through the Head of the Institution '
                        ],
        benefits : ['NRDC National Societal Innovation Award of the Year: Three awards will be given of INR 3,00,000 each',
        'NRDC National Innovation Award of the Year: Two awards will be given of INR 5,00,000 each',
        'NRDC National Budding Innovators Award of the Year: Five awards will be given of INR 1,00,000 each'
        ],
        category : {name:'classification', categoryName :'Merit Based'},
        portalLink : 'http://awards.nrdc.in/'
    },
    {
        scholarshipName: 'Begum Hazrat Mahal National Scholarship Scheme for Minorities Girls 2019-20',
        scholarshipProvider : ' Maulana Azad Education Foundation (MAEF), Ministry of Minority Affairs, Government of India.',
        whoCanApply : ['Only girl students belonging to Muslim, Christian, Sikh, Buddhist, Jain, and Parsi communities are eligible for this scholarship.',
        'They must be studying in class 9 to 12.',
        'The annual family income of the student should be less than INR 2 Lakhs.',
        'The students must have secured a minimum of 50% marks (in aggregate) in the previous class.'
                        ],
        benefits : ['NRDC National Societal Innovation Award of the Year: Three awards will be given of INR 3,00,000 each',
        'NRDC National Innovation Award of the Year: Two awards will be given of INR 5,00,000 each',
        'NRDC National Budding Innovators Award of the Year: Five awards will be given of INR 1,00,000 each'],
        category : {name:'classification', categoryName :'Means Based'},
        portalLink : 'http://awards.nrdc.in/'
    }
]    
    // data.forEach((seed)=>{
    //     Scholarship.create(seed,(err,scholarship)=>{
    //        // if(!err)
    //             //console.log('saved '+(scholarship.scholarshipName));
    //     });
    // })


router.get('/s',(req,res)=>{
        Scholarship.find({},(err,allScholarships)=>{
            res.render('scholarships',{scholarshipData:allScholarships});
        })
    });
    

module.exports = router;