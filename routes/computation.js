var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.acosh() applied to ${x} is ${Math.acosh(x)}`,
    value1: `math.log1p() applied to ${x} is ${Math.log1p(x)}` ,
    value2: `math.tan() applied to ${x} is ${Math.tan(x)}` });
  }
  else{

    for (let a in req.query) {

      res.render('computation', { value: `math.acosh() applied to ${req.query[a]} is ${Math.acosh(req.query[a])}`,
      value1: `math.log1p() applied to ${req.query[a]} is ${Math.log1p(req.query[a])}` ,
      value2: `math.tan() applied to ${req.query[a]} is ${Math.tan(req.query[a])}` })

    }
  }


});


module.exports = router;