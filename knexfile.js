// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://cj:student@localhost/airbnb_clone_listings',
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
    connection: 'postgres://cj:student@localhost/airbnb_clone_listings'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'airbnb_clone_listings',
      user: 'cj',
      password: 'student'
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
      database: 'airbnb_clone_listings',
      user: 'cj',
      password: 'student'
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
