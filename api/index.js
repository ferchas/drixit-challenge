// ============================================================
// Declare Global Dependencies
const config = require('config');
const cors = require('cors');
const express = require('express');
// ============================================================
// Declare Application Router
const appRouter = require('./router');

// ============================================================
// Declare Application Middlewares
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cluster = require('./libs/cluster');

// ============================================================
// Declare Application Config

const app = express();
const appHttpPort = config.get('app.port');

const optionsStatic = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
    res.set('Access-Control-Allow-Origin', '*');
  },
};
const corsWhitelist = config.get('corsWhitelist');
const corsOptions = {
  origin: (origin, callback) => {
    if (corsWhitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

// ============================================================
// Inject Middlewares into App

// cookieParser: parse request cookies into 'req.cookies'
app.use(cookieParser());
// bodyParser: parse request body into 'req.body'
app.use(bodyParser.urlencoded({ extended: true }));
// bodyParser: set body content parser to JSON
app.use(bodyParser.json({ limit: '50mb' }));
// enable CORS with various option
app.use(cors(corsOptions));
// appRouter: defines url mappings for client app
app.use(appRouter);

// ============================================================
// Application StartUp via Cluster Service and app.cluster config
cluster(() => {
  app.listen(appHttpPort, () => {
    console.log(`Application Port: ${appHttpPort} | Environment: ${process.env.NODE_ENV}`); // eslint-disable-line
    console.log(`Cors list: ${corsWhitelist}`);
    console.log('--------------------------------------------------'); // eslint-disable-line
  });
}, config.get('app.cluster'));
