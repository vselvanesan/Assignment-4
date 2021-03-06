let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/bio', { 
    title: 'Biograph:Express Assignment-4' 
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About:Express Assignment-4',
    /*author: 'Vallipuram Selvanesan'*/
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact:Express Assignment-4',
   /* authors: ['Nesan']*/
 });
});

module.exports = router;
