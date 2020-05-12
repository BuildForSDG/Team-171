const express = require('express');
const path  = require('path');
const port = process.env.PORT || 8080;
const app = express();

// routes
const aboutRoute = require('./router/about');
const contactRoute = require('./router/contact');
// hire is for employer accounts
const hireRoute = require('./router/hire');
const homeRoute = require('./router/home');
// listing is for job accounts
const listingRoute = require('./router/listing');
const loginRoute = require('./router/login');
const signupRoute = require('./router/signup');

app.use(express.static(path.join(__dirname, 'build')));

app.use('/',aboutRoute);
app.use('/',contactRoute);
app.use('/',hireRoute);
app.use('/',homeRoute);
app.use('/',listingRoute);
app.use('/',loginRoute);
app.use('/',signupRoute);
// error handling
app.use((req, res, next)=>{
  res.status(404).json({
    status: 404,
    error: 'Not found'
  })
});
// error middleware
app.use((error, req, res, next) =>{
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error'
    }
  });
});
app.listen(port, ()=> console.log(`listening on port ${port}`));
