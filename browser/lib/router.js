'use strict'

const layout = require('../views/layout')
const index = require('../views/index').render

/**
 * Boots up app
 *
 * @param  {Obj} app Choo app
 */

module.exports.boot = (app) => {
	app.router([
		['/', index]	
	])
}

// module.exports = (app) => {
//   app.route('/', layout([index]))
// 	// app.route('/login', layout([login]))


//   // mount app
//   document.body.appendChild(app.start())

//   return app
// }