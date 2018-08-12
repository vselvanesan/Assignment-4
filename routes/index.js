let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('content/bio', { 
    title: 'Express Assignment 4' 
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About Express Assignment 4',
    author: 'Vallipuram Selvanesan'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Us about the assignment 4',
    authors: ['Tom', 'Nesan', 'John', 'Kamal', 'Raj']
 });
});

module.exports = router;
