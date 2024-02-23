const express = require('express')
const routers = require('./routes/index')
const app = express()
const port = 3000

routers(app)

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})