const fs = require('fs');
const path = require('path');

const buildUserPhotos = function buildUserPhotos() {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, '../../', 'images', 'small'), { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(Promise.all(data.map(img => `https://s3.amazonaws.com/airbnbcloneuserphotos/${img}`)))
      }
    });
  });
};

const buildListingPhotos = function buildListingPhotos() {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, '../../', 'images', 'interiorsFixed'), { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(Promise.all(data.map(img => `https://s3.amazonaws.com/airbnbcloneinteriorphotos/${img}`)))
      }
    });
  });
};

buildUserPhotos().then(console.log)

buildListingPhotos().then(console.log)
