const { json } = require('express');
var express = require('express');
var router = express.Router();


router.post('/total', function(req, res, next) {  


  let lista = req.body.lista;

  let suma = 0;
  
  for (const entry of lista) {
    suma+= entry["priceEach"] * entry["quantityOrdered"]
  }
  
  let reponse = {total:suma};
  
  console.log(suma);
  
  res.json(reponse);

  });


module.exports = router;