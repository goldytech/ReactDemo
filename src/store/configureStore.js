if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStoreprod');
} else {
  module.exports = require('./configurestore.dev');
}
