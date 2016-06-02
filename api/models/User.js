'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description User management
 */
module.exports = class User extends Model {

  static config() {
    return {
      schema: {

        // for createdAt and updatedAT
        timestamps: true,
        // version key _v false
        versionKey: false
      },
      methods: {
        toJSON: function () {
          const model = this.toObject()
          delete model.password
          return model
        }
      }
    }
  }

  static schema() {
    return {
      username: {
        type: 'string',
        unique: true
      },
      password: {
        type: 'string'
      }
    }
  }
}
