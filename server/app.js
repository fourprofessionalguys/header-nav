// imports
const express = require('express');
const bodyParser = require('body-parser');

// get app
const app = express();


// Database
const database = require('./db/dbConfig.js');


// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/listings/:listingId', (req, res) => {
  let listing_id = req.params.listingId;
  if ((/(^[1-9]{1}[0-9]?$)|^100$/).test(listing_id)) {
    database('listings').select('*').where({ 'id': listing_id }).then(listingData => {
      console.log('listingData', listingData, typeof listingData);
      database('hosts').select('*').where({ 'id': listingData[0].host_id }).then(hostData => {
        console.log('\n\nhostData', hostData, typeof hostData);
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
        res.status(200).json(responseData[0]);
      })

    });
  }
});



module.exports = app;