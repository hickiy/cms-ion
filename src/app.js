const express = require('express');
const controlers = require('./controlers/index.js');

const app = express()
const port = 3000

controlers(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 