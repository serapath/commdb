var dbcomm = require('../')

module.exports = {
  'simple test': function (done) {
    if (typeof dbcomm === 'function') done()
    else done('`dbcomm` is not a function')
  }
}
