var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/guide', function(req, res, next) {
  res.render('guide', {title: 'guide'})
})

module.exports = router;
