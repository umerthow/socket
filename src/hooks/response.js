const response = {
  error: (res, err) => {
    const statusCode = err.status || 500; 
    res.status(statusCode)
    const errMessage = {
      status: statusCode,
      message: err || err.message || 'Internal Server Error'
    }
    return res.send(errMessage);
  },
  notFound: (req, res, next) => {
    const err = {
      status: 404,
      message: 'Request not found'
    }
    res.status(404);
    return res.send(err);
  },
  success: (res, data) => {
    const response = {
      status: 200,
      data
    }

    return res.send(response)
  }
}

module.exports = response;