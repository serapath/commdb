(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = commdb

function commdb () {
  return {}
}

},{}],2:[function(require,module,exports){
var suites = [
  require('./test1')
]

var runTests = (suite, done) => next(suite, done)
var runSuite = _ => runTests(Object.entries(suites.pop() || {}), runSuite)
runSuite()
function next (suite, done) {
  var [name, test] = suite.pop()
  if (!name) return done()
  test((err, msg) => err ? done(fail(name, err)) : next(success(name, msg)))
}

function fail (name, err) {
  var msg = document.createElement('div')
  msg.innerHTML = `<div>
    <h1 style="color: red;"> ${name} : not ok </h1>
    <h3 style="color: red;"> ${err} </h3>
  </div>`
  document.body.appendChild(msg)
  console.error(name, err)
}

function success (name, success) {
  var msg = document.createElement('div')
  msg.innerHTML = `<div><h1 style="color: green;"> ${name} : ok </h1></div>`
  document.body.appendChild(msg)
  console.log(name, success)
}

},{"./test1":3}],3:[function(require,module,exports){
var dbcomm = require('../')

module.exports = {
  'simple test': function (done) {
    if (typeof dbcomm === 'function') done()
    else done('`dbcomm` is not a function')
  }
}

},{"../":1}]},{},[2]);
