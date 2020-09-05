// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config({path:'../.env'})

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host:process.env.DB_DEVELOPMENT_HOST || 'localhost',
      port:process.env.DB_DEVELOPMENT_PORT || '3000',
      database:process.env.DB_DEVELOPMENT_DATABSE || 'my_database',
      user:process.env.DB_DEVELOPMENT_USER || 'root',
      password:process.env.DB_DEVELOPMENT_PASSWORD || ''
    },
    pool:{
      min:2,
      max:10
    },
    migration:{
      tablename: 'knex_migration'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host:process.env.DB_DEVELOPMENT_HOST || 'localhost',
      port:process.env.DB_DEVELOPMENT_PORT || '3000',
      database:process.env.DB_DEVELOPMENT_DATABSE || 'my_database',
      user:process.env.DB_DEVELOPMENT_USER || 'root',
      password:process.env.DB_DEVELOPMENT_PASSWORD || ''
    },
    pool:{
      min:2,
      max:10
    },
    migration:{
      tablename: 'knex_migration'
    }
  }

};
