'use strict'

const Controller = require('trails-controller')

/**
 * @module HelloWorldController
 * @description Generated Trails.js Controller.
 */
module.exports = class HelloWorldController extends Controller {

  list(req, res) {
    res.json({flag: false, data: req.user, message: 'Logged user detail'})
  }

}

