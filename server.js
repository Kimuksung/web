//import bkfd2Password from 'pbkdf2-password';

//const hasher = bkfd2Password();
//console.log(hasher);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session =require('express-session');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret:'12321312@3132',
    resave:false,
    saveUninitialized:true
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});