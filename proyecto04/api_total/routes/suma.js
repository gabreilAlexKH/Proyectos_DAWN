const { json } = require('express');
var express = require('express');
var router = express.Router();


router.post('/total', function(req, res, next) {  

  //Solo para pruebas con Angular, debe cambiarse a funcionar con todos
  let lista = req.body.headers.updates[0].value;

  let json = JSON.parse(lista);
  let suma = 0;

  for (const entry of json) {
    suma+= entry["priceEach"] * entry["quantityOrdered"]
  }
  
  let reponse = {total:suma};
  
  res.json(reponse);

  });


module.exports = router;