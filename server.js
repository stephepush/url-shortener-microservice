require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl/', function(req, res){
  console.log(req.body)
  let url = req.body.url
  url_without_protocol = url.replace(/^https?:\/\//, '')
  //above line source: https://stackoverflow.com/a/8206279/5456075
  console.log(url_without_protocol)
  dns.lookup(url_without_protocol, (err, address, family)=>{
    console.log(`address: ${address} family: IPv${family}`)
  })
  res.end()
})

app.get('/api/shorturl/:id', function(req,res){

})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
