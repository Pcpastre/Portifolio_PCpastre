
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/indexCleo.html'));
});

router.get('/old', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/IMG', (req, res) =>{
  var img = req.query.img;
  res.sendFile(path.join(__dirname+'/view/_IMG/' + img));
});


app.get('/CSS', (req, res) =>{
  var c = req.query.c;
  res.sendFile(path.join(__dirname+'/view/_CSS/' + c));
});


app.get('/SCR', (req, res) =>{
  var c = req.query.scr;
  res.sendFile(path.join(__dirname+'/view/_SCR/' + c));
});

app.get('/FONT', (req, res) =>{
  var c = req.query.f;
  res.sendFile(path.join(__dirname+'/view/_FONT/' + c));
});


//add the router
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
