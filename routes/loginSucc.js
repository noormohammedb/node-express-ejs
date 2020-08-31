const express = require('express');
const route = express.Router();

route.get('/', (req,res,next) => {
    console.log(req.query.userName);
    res.render('loginSucc', {
        user : req.query.userName,
        title : 'login Success'
    });
});

module.exports = route;