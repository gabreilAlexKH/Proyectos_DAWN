var express = require('express');
var router = express.Router();
const models = require('../models').default;

router.get('/findAll/json', function(req, res, next) {

    models.log_sales.find( (err, response) => {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting log_visitas.',
                error: err
            });
        }
  
        return res.json(response);
    });
  
  });
  

router.get('/findAllShipped/:customerNumber/json', function(req, res, next) {

    var customerNumber = req.params.customerNumber;
  
    models.log_sales.find({customerNumber: customerNumber , status: "Shipped"}, function (err, response) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting log_visitas.',
                error: err
            });
        }
  
        if (!response) {
            return res.status(404).json({
                message: 'No such log_visitas'
            });
        }
  
        return res.json(response);
    });
  
  });

module.exports = router;
