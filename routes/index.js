var express = require('express');
var router = express.Router();
var fs = require('fs');
const cors = require('cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function bazadd(){
  return JSON.parse(fs.readFileSync('baza_de_date.json','utf-8'));
}

router.post('/cats/post',function (req,res) {
  if(req.body.name && req.body.weight && req.body.color){
    const cat = {
      name : req.body.name,
      weight : req.body.weight,
      color : req.body.color
    }
    adaugapisi(cat);
    res.status(200).send();
  }
  else res.status(403).send();
})

function adaugapisi(cat){
  var db = bazadd();
  db.Cats.push(cat);
  var json = JSON.stringify(db);
  fs.writeFileSync('baza_de_date.json', json, 'utf8');
}
module.exports = router;
