const express = require('express');
const bodyParser=require('body-parser');
const app = express();
//var session = require('express-session');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
/*
app.use(session({
  secret: '1234DSFs@adf1234!@#$asd',
  resave: false,
  saveUninitialized: true
}));*/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const boardsRouter = require('./routes/board');
app.use('/boards', boardsRouter);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});