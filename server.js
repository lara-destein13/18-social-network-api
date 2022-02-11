const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user');
const thought = require('./models/thought');
const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3000', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

const root = (req, res) => {
    console.log("root");
    res.send("root");
}

const userGetAll = (req, res) => {
    console.log("userGetAll");
}

const userGetSingle = (req, res) => {
    console.log("userGetSingle");
}

const userPostNew = (req, res) => {
    console.log("userPostNew");
}

const userPutModified = (req, res) => {
    console.log("userPutModified");
}

const userDelete = (req, res) => {
    console.log("userDelete");
}

app.get('/', root);
app.get('/api/users', userGetAll);
app.get('/api/users/:id', userGetSingle);
app.post('/api/user', userPostNew);
app.put('/api/user/:id', userPutModified);
app.delete('/api/user/:id', userDelete);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });