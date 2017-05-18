'use strict';

module.exports = {
  "development": {
    "client": 'pg',
    "connection": 'postgres://localhost/cl_dev'
  },
  "test": {
    "client": 'pg',
    "connection": 'postgres://localhost/cl_test',
    "migrations": {
      "directory": "./server/migrations"
    },
    "seeds": {
      "directory": "./server/seeds"
    }
  },

  "production": {
    "client": 'pg',
    "connection": process.env.DATABASE_URL
  }
};
