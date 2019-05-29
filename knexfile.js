// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://flamingeagle9000:rosie123@localhost/airbnb_clone_listings',
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
    connection: 'postgres://flamingeagle9000:rosie123@localhost/airbnb_clone_listings',
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
      database: 'airbnb_clone_listings',
      user: 'flamingeagle9000',
      password: 'rosie123'
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
      user: 'flamingeagle9000',
      password: 'rosie123'
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
