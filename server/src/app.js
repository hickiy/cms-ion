import express from 'express';
import controlers from './controlers/index.js';
import middlewares from './middlewares/index.js';

const app = express()
const port = 3000

middlewares(app)
controlers(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})