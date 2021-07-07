const http = {
  SUCCESS: 200,
  INTERNAL_ERROR: 500,
  NOT_FOUND: 404,
  CONFLICT: 409
}

const errMessage = {
  NOT_FOUND: 'data not found'
}

module.exports = {
  http,
  errMessage
};