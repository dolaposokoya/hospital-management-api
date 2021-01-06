require('dotenv').config()
const {PORT} = process.env
// const express = require('express')
const express = require('express')
const path = require("path");
const doctorRoute = require('./routes/doctorRoute');


const app = express()

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/doctor', doctorRoute)
app.use("/api/doctor", doctorRoute);
console.log(`Server started at port ${PORT}`)