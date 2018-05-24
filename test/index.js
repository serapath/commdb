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
