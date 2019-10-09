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
         time:req.body.time
        };
         query="INSERT INTO fir SET ?"
        
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
    }

}
module.exports = crime