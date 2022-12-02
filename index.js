const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

<<<<<<< HEAD
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
=======
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3120;

app.use(express.json());

const whitelist = ['http://localhost:5432', 'https://myapp.co'];
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
<<<<<<< HEAD
  }
}
=======
  },
};
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
<<<<<<< HEAD
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
=======
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
});
