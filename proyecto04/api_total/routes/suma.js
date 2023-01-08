var express = require('express');
var router = express.Router();


router.post('/total', function(req, res, next) {  

  let {lista} = req.body;

  
  //let jsen = [{priceEach: 5 , quantityOrdered: 4} , {priceEach: 3 , quantityOrdered: 2} , {priceEach: 6  , quantityOrdered: 7}]
  
  
  let suma = 0;

  for (const entry of lista) {

    suma+= entry["priceEach"] * entry["quantityOrdered"]
    
  }
  
  
    
  let reponse = {total:suma};
  res.json(reponse);

  });


module.exports = router;