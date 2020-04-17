const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Chess:ajedrez94@cesarc-o6v4h.mongodb.net/baseSuple?retryWrites=true&w=majority')
    .then(db=>{console.log('conect to mongo')})
    .catch(err=>{console.log('error al conectar')});

module.exports = mongoose;