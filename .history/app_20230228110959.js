const xml2js=require('xml2js');
const fs=require('fs');
fs.read(__dirname+'/app.xml',function(error,data){
   
   if (err) throw new Error(err);
   const parser=new xml2js.Parser();
   parser.parseStringPromise(data).then(function(res){
            console.log(res);

   }).catch(function(err){
               console.log(err);
   })

})