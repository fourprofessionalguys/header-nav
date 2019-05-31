// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// get app
const app = express();


// Database
const database = require('./db/dbConfig.js');


// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/listings/header/:id', (req, res) => {
  let listing_id = req.params.id;
  if ((/(^[1-9]{1}[0-9]{0,1}$)|^100$/).test(listing_id)) {
    database('listings').select('*').where({ 'id': listing_id }).then(listingData => {
      database('hosts').select('*').where({ 'id': listingData[0].host_id }).then(hostData => {
        const responseData = listingData.map(item => {
          return {
            title: item.title,
            description: item.description,
            guests: item.capacity,
            cost: item.cost,
            bedrooms: item.bedrooms,
            beds: item.beds,
            baths: item.baths,
            listingPhoto: item.photoUrl,
            type: item.type,
            country: item.country,
            hostName: hostData[0].name,
            hostDescription: hostData[0].description,
            hostPhoto: hostData[0].hostUrl,
          }
        })
        res.status(201).set({
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
        }).json(responseData[0]);
      });
    });
  } else {
    res.status(400).end();
  }
});



module.exports = app;