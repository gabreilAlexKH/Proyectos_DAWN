var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("../basedatos-api-sales-firebase-adminsdk-rkmcw-26cf69e32c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://basedatos-api-sales-default-rtdb.firebaseio.com"
});

const db = admin.database();


router.get('/findAll/json', function(req, res, next) {
    db.ref().child("log_sales").once("value" , (snapshot) =>{

        if(snapshot.exists()){
            const response = snapshot.val();
            return res.json(response);

        }else{
            return res.status(500).json({
                message: 'Error when getting log_visitas.',
                error: err
            });
        }
    });
  });
  
  router.get('/findAll/:customerNumber/json', function(req, res, next) {
   
    const customerNumber = parseInt(req.params.customerNumber);

    db.ref().child("log_sales").orderByChild("customerNumber").equalTo(customerNumber).once("value" , (snapshot) =>{

        if(snapshot.exists()){
            var response = [];

            snapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;

                response.push(item);
            });

            return res.json(response);

        }else{
            return res.status(500).json({
                message: 'Error when getting log_visitas.',
                error: err
            });
        }
    });
  
  });

router.get('/findAllShipped/:customerNumber/json', function(req, res, next) {

    const customerNumber = parseInt(req.params.customerNumber);

    db.ref().child("log_sales").orderByChild("customerNumber").equalTo(customerNumber).once("value" , (snapshot) =>{

        if(snapshot.exists()){
            var response = [];

            snapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;

                response.push(item);
            });

            return res.json(response.filter(entry => entry["status"] == "Shipped")); 

        }else{
            return res.status(500).json({
                message: 'Error when getting log_visitas.',
                error: err
            });
        }
    });
  
  
  });


module.exports = router;
