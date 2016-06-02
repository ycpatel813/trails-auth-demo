'use strict'
/* global describe, it */

const assert = require('assert')

describe('Passport', () => {
  it('should exist', () => {
    assert(global.app.api.policies['Passport'])
  })
})
