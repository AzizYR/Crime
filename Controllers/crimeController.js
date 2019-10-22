const db = require('../Database/mongoConn')
const crim = require('../Routes/crimeRouter')

var crime = {
    
    registerFir : async function(req,res){
        try{
        let data={
         name:req.body.name,
         gender:req.body.gender,
         place:req.body.place,
         details:req.body.details,
         date :req.body.date,
         time:req.body.time,
         addr:req.body.addr,
         firtype:req.body.firtype,
         number:req.body.number,
         uid:req.body.uid,
         status:req.body.status
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
                res.json({
                    success:true,
                    message:"Fir Registered"
                })
                
            }
        });
    }
    catch(err){
        res.json({
            success:false,
            message:err
        })
    }
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
    },
    status:async function(req,res){
        try{
        var uid=req.body.uid;
        var status = req.body.status;
        let query="SELECT * from fir where uid=? and status=?";
        let sql=db.query(query,[uid,status],(error,result)=>
        {
            if(error)
            {
                throw error;
            }
            else
            {
                res.json({
                    success:true,
                    data:result
                })
            }
        });
    }
    catch(err){
        res.json({
            success:false,
            message:err
        })
    }
    }
    // InProgress:async function(req,res){
    //     var uid=req.body.userid;
    //     let query="SELECT * from fir where uid=uid and status='INPROGRESS' ";
    //     let sql=db.query(query,(error,result)=>
    //     {
    //         if(error)
    //         {
    //             throw error;
    //         }
    //         else
    //         {
    //             console.log(result);
    //         }
    //     });
    // },
    // Solved:async function(req,res){
    //     var uid=req.body.userid;
    //     let query="SELECT * from fir where uid=uid and status='SOLVED' ";
    //     let sql=db.query(query,(error,result)=>
    //     {
    //         if(error)
    //         {
    //             throw error;
    //         }
    //         else
    //         {
    //             console.log(result);
    //         }
    //     });
    // },
    


}

module.exports = crime