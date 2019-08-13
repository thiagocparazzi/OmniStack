const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    //likes: sem o colchetes, estaria referenciando apenas um ID/ uma pessoa, com o colchetes, isso indica muito
    likes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Dev', 
    }],
    dislikes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Dev', 
    }],
}, {
    timestamps: true, //armazena a data de criação de um registro e data de atualização
});

module.exports = model('Dev', DevSchema);