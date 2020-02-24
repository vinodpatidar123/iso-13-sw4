var express = require('express');
var router = express.Router();
var { MyContract, coinbase,web3 } = require("../myContract");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patient', { title: 'Express' });
  });

router.post('/setPatient', function (req, res, next) {
    var data = req.body;
    console.log(data);
    MyContract.methods.setPatient(data.phone, data.name, data.dob, data.addrs, data.email, data.gender)
        .send({from:coinbase, gas : 6000000 });
    res.send("Patient Registered !")
});

router.get('/getPatient', function (req, res, next) {
    var data = req.query;
    console.log(data);
    MyContract.methods.getPatient(data.phone)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            res.render("patient_profile", {myData : val});
        })
});


module.exports = router;