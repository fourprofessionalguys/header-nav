
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('hosts', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.text('hostUrl')
      table.date('dateJoined')
      table.string('language')
      table.string('responseRate')
      table.string('responseTime')
    }),
    knex.schema.createTable('listings', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('city')
      table.string('state')
      table.string('country')
      table.decimal('cost')
      table.integer('capacity')
      table.string('type')
      table.integer('bedrooms')
      table.integer('beds')
      table.integer('baths')
      table.text('photoUrl')
      table.integer('host_id')
      table.foreign('host_id').references('hosts.id')
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('listings'),
    knex.schema.dropTable('hosts')
  ]);
};