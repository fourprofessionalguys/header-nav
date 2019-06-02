// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      host: 'header.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'headerdb'
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    }
  },

  test: {
    client: 'pg',
    connection: {
      user: 'postgres',
      host: 'header.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'headerdb'
    },
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      host: 'header.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'headerdb'
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
    client: 'postgresql',
    connection: {
      user: 'postgres',
      host: 'header.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'headerdb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
