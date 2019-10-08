const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

app.get('/api/whoami', (req, res) => {
  const headers = req.headers
  res.json({
    ipaddress: headers['host'],
    language: headers['accept-language'],
    software: headers['user-agent']
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
