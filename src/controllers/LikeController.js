const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { devId } = req.params;
        const { user }  = req.headers;

        //armazena a instância desses dados no banco de dados:
        const loggeDev  = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not found :('});
        }

        if (targetDev.likes.includes(loggeDev._id)){
            console.log('MATCH');
        }

        //push como se fosse um array (pois é um vetor), adiciona tal ID para os likes do loggedDev - push para add coisas
        //_id pq é como o mongodb salva o id
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggeDev);
    }
};