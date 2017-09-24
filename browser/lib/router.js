 'use strict'

 const welcome = require('../views/welcome').render
 const layout = require('../views/layout')

/**
 * Boots up app
 *
 * @param  {Obj} app Choo app
 */

 module.exports = (app) => {
   app.route('/', layout([welcome]))
 }
