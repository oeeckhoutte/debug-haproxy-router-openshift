const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var headers = {'Proxy': 'Olivier E.'};
  res.set(headers)

  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
