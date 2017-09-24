'use strict'

const version = require('../package').version
const choo = require('choo')

const app = choo()

app.use(function (state, emitter) {
  emitter.on('login', () => {
    state.user = {
      isLoggedIn: true
    }

    emitter.emit('render')
  })
})

require('./lib/router')(app)

document.body.appendChild(app.start())
