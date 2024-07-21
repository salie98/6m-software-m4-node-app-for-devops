require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.json());
const print = require("./controller");

app.get('/', print);
app.get('/', home);
app.post('/',user);
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})