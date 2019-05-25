const data = require('../../dataGenerator.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(() => knex('hosts').del())
    .then(() => {
      // Inserts seed entries
      return data.then(data => {
        return Promise.all(data.map(group => {
          return knex('hosts').insert(group.host, 'id')
            .then(host => {
              group.listing.host_id = host[0];
              return knex('listings').insert(group.listing, 'id')
            })
            .catch(error => console.log('error with listing', error));
        }))
          .catch(error => console.log('Error with data.map Promise.all', error));
      });
    });
};
