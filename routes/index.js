var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});


function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    // console.log('this is')
    return next();
  }
  req.flash('success', 'Please login first.');
  res.redirect('/users/login');
}

module.exports = router;
