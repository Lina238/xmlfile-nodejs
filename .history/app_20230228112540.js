const xml2js=require('xml2js');
const fs=require('fs');
var fs = require('fs');
fs.readFile(__dirname+'/app.xml',function(err,data){
   
   if (err) throw new Error(err);
   const parser=new xml2js.Parser();
   parser.parseStringPromise(data).then(function(res){
            console.log(res.demo);
            console.log(res.demo.content );
            var json = JSON.stringify(res);

   }).catch(function(err){
               console.log(err);
   })

})




