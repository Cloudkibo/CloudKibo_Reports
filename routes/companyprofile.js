var express = require('express');
var router = express.Router();
var needle = require('needle');
var https = require('https');
var request = require('request');
var moment = require('moment');
var  headers =  {
             'kibo-app-id' : '5wdqvvi8jyvfhxrxmu73dxun9za8x5u6n59',
             'kibo-app-secret': 'jcmhec567tllydwhhy2z692l79j8bkxmaa98do1bjer16cdu5h79xvx',
             'kibo-client-id': 'cd89f71715f2014725163952'     
          }
    /************************************* Get Company information ****************/
    
  /* Get agent information */
router.get('/companyprofile', function(req, res, next) {
    var options = {
          url: 'https://api.kibosupport.com/api/companyprofiles/fetch',
          headers:headers
        };
  
      
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            var data = [];
            var dpt;
            var i =0;
            console.log(info.length);
            console.log(info);
      res.render('companyprofile',{mydata:info});
               }
          
      else
        {
        //  data = null;
          console.log(error);
        
        
        }
     }
 
    request(options, callback);

    });  
    
module.exports = router;