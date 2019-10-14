const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.get('/api/whoami', (req, res) => {
  const headers = req.headers
  res.json({
    ipaddress: headers['host'],
    language: headers['accept-language'],
    software: headers['user-agent']
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
