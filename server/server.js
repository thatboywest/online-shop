const express = require('express');



const mongoose = require('mongoose');
const productRoute=require("./routers/products")
const cors = require('cors'); 
const signinRoute= require("./routers/signin")
const LoginRoute=require("./routers/login")
const stripe =require("./routers/stripe")

const Product = require('./Models/ProductSchema'); // Import the product mode

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: '*' }));

mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
  app.get('/', (req, res) => {
    res.send('Welcome to the root of the application!');
  });
app.use("/api/products", productRoute)
app.use("/api/signin", signinRoute)
app.use("/api/login", LoginRoute)
app.use("/api/stripe", stripe)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
