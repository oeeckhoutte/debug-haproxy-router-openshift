const express = require('express')
const app = express()
const os = require('os');

app.get('/', function (req, res) {
  
  res.set({'Proxy': 'Olivier E.'});
  res.set({'X-Forwarded-Host': os.hostname()});

  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
