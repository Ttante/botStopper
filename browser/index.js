'use strict'

const version = require('../package').version
const choo = require('choo')

const app = choo()

Promise.resolve(app)
  .then(require('./lib/router'))
  .then(require('./lib/models'))
  .then(() => {
    console.log('Creators has started!')
  })
  .catch((err) => {
    console.log(err.stack || err)
  })