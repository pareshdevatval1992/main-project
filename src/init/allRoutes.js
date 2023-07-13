const express = require("express");
const user = require("../routes/userRoute");

const allRoutes = (app) => {
    // encoding and formatting
    app.use(express.json({limit: '50mb'}));

    app.use('/user', user);
   
  };
  
module.exports = allRoutes;
  