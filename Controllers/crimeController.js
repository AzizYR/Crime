const db = require('../Database/mongoConn')
const crim = require('../Routes/crimeRouter')

var crime = {

    registerFir : async function(req,res){
        let data={
         name:req.body.name,
         gender:req.body.gender,
         place:req.body.place,
         details:req.body.details,
         date :req.body.date,
         time:req.body.time,
         addr:req.body.addr,
         firtype:req.body.firtype,
         number:req.body.number
        };
         query="INSERT INTO fir SET ?";
        
        let sql=db.query(query,data,(error,result)=>
        {
            if(error)
            {
                throw error;
            }
            else
            {
                console.log("FIR REGISTERED");
                console.log(result);
                
            }
        });
    },
    getfirdetails:async function(req,res){
        let query="SELECT * from fir where userid=fir.uid";
        let sql=db.query(query,(error,result)=>{
            if(error)   
            {
                throw error;
            }
            else
            {
                console.log(result);
            }
        })
    }


}
module.exports = crime