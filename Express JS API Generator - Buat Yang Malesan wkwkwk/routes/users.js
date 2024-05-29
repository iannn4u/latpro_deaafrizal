var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Showing all of users list!');
});

router.get('/blocked', function(req, res, next) {
 const blockedUsers = [
  {
  uuid: Math.random().toString(),
  name: 'Alandrian Surya Tantra',
  address: 'Jl. Perjuangan 1'
 },
 {
  uuid: Math.random().toString(),
  name: 'Naylatul Az-Zahra',
  address: 'Jl. Pecak 2 '
 }
]
 res.status(200).json({payload: blockedUsers});
});

module.exports = router;
