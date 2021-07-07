const express = require('express');

const cors = require('cors');
const app = express();
const { error, notFound } = require('./hooks/response');
const routes = require('./routes');
const $ = require('../config/default');
app.use(cors());

app.use('/', routes);

// 404 fallthrogh
app.use((req, res, next) => {
  notFound(req, res, next)
});

// Optional fallthrough error handler
app.use(function onError (err, req, res, next) {
    error(res, err);
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
  // application specific logging, throwing an error, or other logic here
})

let port = $.PORT || 4000;
app.listen(port);
console.log(`app listen in port, ${port}`);
