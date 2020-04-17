const empresa = require('../models/models_empresa');
const {Router} = require('express')
const router = Router();

router.post('/crearEmpresa',(req,res)=>{

    const{  name,email,phones,direccion} = req.body

    persona.insertMany({
        name,email,phones,direccion},
        (err,res)=>{
            if(err){
                throw err;              
            }else{
                res.status(200).json(resp);
            }

    })
}).post('/editarEmpresa',(req,res)=>{
    const{_id, name,email,phones,direccion}
    persona.updateOne({_id:_id},{$set:{
        name,email,phones,direccion        
    }},(erro,resp)=>{
        if(err){
            throw err;              
        }else{
            res.status(200).json(resp);
        }
    })
}).post('/eliminarEmpresa',(req,res)=>{
    const{_id} = req.body

    empresa.remove({_id:_id},(err,resp)=>{
        if(err){
            throw err;              
        }else{
            res.status(200).json(resp);
        }

    })
}).get('/todos',(req,res)=>{
    empresa.find({},(err,resp)=>{
        if(err){
            throw err;              
        }else{
            res.status(200).json(resp);
        }        

    })
})

module.exports = router