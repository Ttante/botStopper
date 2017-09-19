'use strict'

module.exports = (app) => {

  app.use((state) => {
    state.user = {}
  })

  return app
}