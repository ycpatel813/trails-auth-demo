/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Authcontroller route
   */
  {
    method: 'POST',
    path: '/auth/login',
    handler: 'AuthController.login'
  },
  {
    method: 'POST',
    path: '/auth/register',
    handler: 'AuthController.register'
  },
  {
    method: 'GET',
    path: '/auth/logout',
    handler: 'AuthController.logout'
  },

  /**
   * HelloWorld controller routes
   */

  {
    method: 'GET',
    path: '/hello/list',
    handler: 'HelloWorldController.list'
  }
]
