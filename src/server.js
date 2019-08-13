const express  = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const routes   = require ('./routes');

//chamando o express, cria-se um servidor para requisições
const server = express();

mongoose.connect('mongodb+srv://nickinho:nickinho@cluster0-1azlf.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

//acessando essas requisições
server.listen(3333);