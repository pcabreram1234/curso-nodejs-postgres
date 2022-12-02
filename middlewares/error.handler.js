<<<<<<< HEAD
function logErrors (err, req, res, next) {
=======
const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

<<<<<<< HEAD

module.exports = { logErrors, errorHandler, boomErrorHandler }
=======
function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
