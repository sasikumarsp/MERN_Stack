//Third Party Module
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cros = require('cors');

//Midleware
app.use(express.json());
app.use(morgan('dev'));

app.use(cros());

//Router
const userRouter = require('./userRouter');
const formRouter = require('./formRouter');
app.use('/api', userRouter);
app.use('/job', formRouter);


//Listen Port
app.listen(5000, () => {
    console.log("localhost connected successfully");
})


//DB Connections
mongoose.connect('mongodb+srv://MERN:deadlove@cluster0.ypikg.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("mongodb connected successfully");
    })