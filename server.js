const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userController = require('./controllers/user-controller');
const thought = require('./models/thought');
const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/network', {
useNewUrlParser: true,
useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

const root = (req, res) => {
    console.log("root");
    res.send("root");
}

// create application/json parser
var jsonParser = bodyParser.json()

app.get('/', root);
app.get('/api/users', userController.userGetAll);
app.get('/api/users/:id', userController.userGetSingle);
app.post('/api/user', jsonParser, userController.userPostNew);
app.put('/api/user/:id', jsonParser, userController.userPutModified);
app.delete('/api/user/:id', userController.userDelete);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });