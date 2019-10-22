const express = require('express');
const router = express.Router(),
       path = require('path') ;


       router.get('/',(req,res)=>{
              res.sendFile('/index.html', { root: path.join(__dirname, '../pages') });    
          });
          
          router.get('/registerFir',(req,res)=>{
              res.sendFile('/register_fir.html',{ root: path.join(__dirname, '../pages') })
          })

module.exports=router;