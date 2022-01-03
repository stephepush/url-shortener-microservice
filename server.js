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
  dns.lookup('apple.com', (err, address, family)=>{
    console.log(`address: ${address} family: IPv${family}`)
  })
  res.end()
})

app.get('/api/shorturl/:id', function(req,res){

})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
