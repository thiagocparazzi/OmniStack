const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            //$and funciona como AND, ou seja, o filtro deve passar por todos os requisitos
            $and: [
                //retorna usuários que ainda não passaram pelo usuario logado
                { _id: { $ne: user } }, //$ne (not equal) - tira o próprio usuário logado, todos sem ser esse id
                { _id: { $nin: loggedDev.likes } }, //$nin (not in) - não esteja na lista de likes do usuário logado
                { _id: { $nin: loggedDev.dislikes } },
            ],
        })

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        //procura se o usuário já existe
        const userExists = await Dev.findOne({ user: username });

        //se j[a existe, retorna os dados desse usuário
        if (userExists){
            return res.json(userExists);
        }

        //await para funções async -axios- , colocando async antes da função
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
};