import request from 'supertest';
const app = require('../app.js');

describe('test get route', () => {

  test('root path should respond with status code 200', (done) => {
    request(app).get('/').then(response => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  test('route /listings should respond with 201 and listing data', (done) => {
    request(app).get('/api/listings/header/1').then(response => {
      const listingProps = Object.keys(response.body);

      expect(response.statusCode).toEqual(201);
      expect(typeof response.body).toEqual('object');
      expect(listingProps).toEqual(expect.arrayContaining(['title', 'description', 'guests', 'cost', 'bedrooms', 'beds', 'baths', 'listingPhoto', 'type', 'country', 'hostName', 'hostDescription', 'hostPhoto']));
      done();
    });
  });

  test('route /listings should respond with status code 400 when listingId is not between 1 and 100 for get to /reviews/:listingId', (done) => {
    request(app).get('/api/listings/header/101').then(response => {
      expect(response.statusCode).toEqual(400);
      done();
    });
  });
});