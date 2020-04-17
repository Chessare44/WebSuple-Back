const {Schema, model} = require ('mongoose');

const empresaSchema = new Schema({
    name:{type:String},
    email:{type:String},
    phones:{type:String},
    direccion:{type:String},
    
})

const empresa = model('empresas', empresaSchema);

module.exports = [empresa]