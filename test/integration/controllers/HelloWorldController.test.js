'use strict'
/* global describe, it */

const assert = require('assert')

describe('HelloWorldController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['HelloWorldController'])
  })
})
