const xml2js=require('xml2js');
const fs=require('fs');
fs.readFile(__dirname+'C:/Users/Lina-pc/OneDrive/Bureau/bureau/work/Xmlnodejs/app.xml',function(err,data){
   
   if (err) throw new Error(err);
   const parser=new xml2js.Parser();
   parser.parseStringPromise(data).then(function(res){
            console.log(res);

   }).catch(function(err){
               console.log(err);
   })

})