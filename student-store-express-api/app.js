// YOUR CODE HERE
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const app = express()
const storeRouter  = require('./routes/store.js');


//MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use(morgan("tiny"))


// ENDPOINTS

app.use("/store", storeRouter)


app.get("/", (req, res) => {
    res.status(200).send({"ping": "pong"})
})


module.exports = app;
