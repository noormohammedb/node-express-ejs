const express = require('express');
const route = express.Router();

route.get('/', (req,res,next) => {
    res.render('about',{title : 'ejs page',
                        heading: 'Hello World',
                        paragraph : 'This is Ejs page'});
})

module.exports = route;