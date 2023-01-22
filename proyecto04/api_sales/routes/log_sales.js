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
            return res.status(404).json({
                message: 'No existen datos en la base da datos',
                error: "Data not found"
            });
        }
    } , (error) =>{

        return res.status(500).json({
            message: 'Error de la base de datos Firebase',
            error: error
        });
    });
  });
  
  

router.get('/findAllShipped/:customerNumber/json', function(req, res, next) {

    const customerNumber = parseInt(req.params.customerNumber);

    const consulta = db.ref("log_sales").orderByChild("customerNumber").equalTo(customerNumber);
    

    consulta.once("value" , (snapshot) =>{

        if(snapshot.exists()){
            
            var response = [];

            snapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;

                response.push(item);
            });

            return res.json(response.filter(entry => entry["status"] == "Shipped")); 
            

        }else{
            return res.status(404).json({
                message: 'No hay usuario con id: ' + customerNumber,
                error: "User not found"
            });
        }
    } , (error) =>{

        return res.status(500).json({
            message: 'Error de la base de datos Firebase',
            error: error
        });

    });
  
  
  });


module.exports = router;
