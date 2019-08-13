const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/dev', DevController.index);
routes.post('/devs', DevController.store);
// :devId esta se referindo ao ID do usuário
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes;

/*//buscando infos da API
//req = infos da requisição
//res = resposta dada àquela requisição
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}`});
});*/