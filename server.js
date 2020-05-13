const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// static files
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// API routes
const hireRouter = require('./router/hire.js');

app.use('/', hireRouter);
// error handling
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    error: 'Not found',
  });
});
// error middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
