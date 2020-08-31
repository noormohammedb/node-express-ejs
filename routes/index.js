var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title : 'login'});
});

router.post('/', (req,res,next) => {
  res.render('loginSucc', {
      user : req.body.userName,
      title : "login Success"
  }); 
});

module.exports = router;
