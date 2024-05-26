const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const useroute = require('./routes/userroute');
const propertyroute=require('./routes/propertyroute')
const likeroute=require('./routes/likeroute')

const app = express();

// Configure multer for file uploads


app.use(express.json());
app.use(cors());
app.use('/api', useroute);
app.use('/property',propertyroute)
app.use('/like',likeroute)


mongoose.connect('mongodb+srv://manikchadha:1234@cluster0.wuartuc.mongodb.net/presidio?retryWrites=true&w=majority&appName=Cluster0').then(() => {
  console.log('db connected');
  app.listen(8080, () => console.log('server running successfully'));
});

