const faker = require('faker');
const axios = require('axios');
const _ = require('underscore');
const fs = require('fs');
const path = require('path');
const randomProfile = require('random-profile-generator');

const randomBoundedInt = function randomBoundedInt(bound) {
  return Math.floor(Math.random() * (bound)) + 1;
};

const randomIntInRange = function randomIntInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

const randomSelect = function randomSelect(list) {
  return list[randomIntInRange(0, list.length - 1)];
};

const randomSelectionRange = function randomSelectionRange(list) {
  let mid = Math.floor(list.length / 2);
  list.slice(randomIntInRange(0, mid), randomIntInRange(mid, list.length - 1));
};

const randomPercentage = function randomPercentage() {
  return `${randomIntInRange(25, 100)}%`;
};

const randomTimeRangeString = function randomTimeRangeString(frame) {
  return `Between ${randomIntInRange(1, 5)} to ${randomIntInRange(5, 24)} ${frame}`;
};

const randomBoundedPrice = function randomBoundedPrice() {
  return randomIntInRange(89, 500);
};

const randomListingTitle = function randomListingTitle() {
  let starter = ['Vintage', 'Immaculate Architect\'s', 'Let yourself be enlightened with this', 'Stunning', 'Charming', 'Bright', 'Take a magic stroll through the city from this', 'Modern', 'Admire Stunning Ocean Views from a', 'Unwind in a'];
  let ender = ['Townhouse with terrace', 'Mediterranean style apartment near the beach', 'Studio apartment minutes from downtown', 'Parisian studio in the heart of city', 'Artist\'s studio', 'Stylish Loft in Chic neighborhood', 'Penthouse with breathtaking views of the mountains'];
  return `${randomSelect(starter)} ${randomSelect(ender)}`;
};

const randomListingDescription = function randomListingDescription() {
  const adjective = ['beautiful', 'scenic', 'delightful', 'lovely'];
  const location = ['in the heart of downtown', 'a short walk from the beach', 'at a seculeded location', 'in the middle of the woods'];
  return `A ${adjective[randomIntInRange(0, adjective.length - 1)]} place to stay ${location[randomIntInRange(0, location.length - 1)]}.`;
};

const randomHostDescription = function randomHostDescription() {
  let starter = ['I am a professional Dancer.', 'I moved to the city to pursue a career in opera and other creative endevors.', 'I am originally from Canada, but went to university in the UK.', 'I work in advertising and marketing for an international firm.', 'I work as a lawyer for a small, private firm.', 'I am a recent university graduate working in Web Development.'];
  let middle = ['I am passionate about design and architecture.', 'I love traveling and meeting people from all over the world.', 'I am addicted to travel and fine dinning.', 'My passion is putting together beautiful living spaces.'];
  let ender = [' I am excited to make you love this place as much as I do.', '', ' Looking foward to meeting new people from all over the world.', '', ' Please don\'t hesitate to reach out with any questions regarding the property.', '', ''];
  return `${randomSelect(starter)} ${randomSelect(middle)}${randomSelect(ender)}`;
};

const generateRandomReview = function generateRandomReview() {
  let starter = ['OMG! ', 'JUST. WOW. ', '', '', 'What a blast! ', 'My wife and I really enjoyed the location. ', '', 'Good news everyone! ', 'Very clean and beautiful decore! ', 'Great space. ', 'Unfuhgetable! ', 'It was meh. ', 'It was nice. ', 'From the moment I saw the place I knew it would be a trainwreck. ', 'WARNING: not as advertised. '];
  let hostAdjective = ['very helpful and pleasant', 'warm and friendly', 'kinda a jerk', 'charming', 'nice but couldn\'t stop talking about her cats', 'friendly'];
  let location = ['house', 'home', 'house', 'apartment', 'townhouse', 'house', 'apartment', 'villa', 'apartment'];
  let locationAdjective = ['just as advertised.', 'just what the doctor ordered.', 'breath taking.', 'cute and cozy.', 'lovely.'];
  let stayAdjective = ['interesting to say the least.', 'quite pleasent.', 'fun and relaxing.', 'well worth the price.'];
  let ending = ['In conclusion ', 'all in all ', '', '', '', ''];
  let ending2 = [' would say things went very well.', ' had a great time.', ' absolutely loved my time there.', ' we had a wonderful stay.', ' hated it.', ' would never go back.', 't was great.'];

  return `${randomSelect(starter)}The host was ${randomSelect(hostAdjective)} and the ${randomSelect(location)} was ${randomSelect(locationAdjective)}
  The ${randomSelect(['two', 'three', 'four', 'five'])} days I spent there were ${randomSelect(stayAdjective)} ${randomSelect(ending)}I${randomSelect(ending2)}`
};

const HOUSES_COLLECTION = 3488741;
const PEOPLE_COLLECTION = 138794;

const fetchPhotos = function fetchPhotos(collectionId) {
  return axios({
    url: `https://api.unsplash.com/collections/${collectionId}/photos`,
    params: {
      'page': 1,
      'per_page': '100',
      'client_id': UNSPLASH_API_KEY
    },
    method: 'GET'
  })
    .then(res => res.data.map(item => `https://api.unsplash.com/photos/${item.id}?client_id=${UNSPLASH_API_KEY}`))
    .then(urls => {
      return Promise.all(urls.map(url => {
        return axios({
          method: 'GET',
          url: url
        })
          .then(data => {
            return data.data.urls.small;
          });
      }))
    });
}

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


const generateOneListing = function generateOneListing(url) {
  return {
    title: randomListingTitle(),
    description: randomListingDescription(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    cost: randomBoundedPrice(),
    capacity: randomBoundedInt(1, 22),
    type: randomSelect(['villa', 'apartment', 'apartment', 'loft', 'house', 'loft', 'townhouse', 'townhouse', 'house', 'house', 'house', 'apartment']),
    bedrooms: randomIntInRange(1, 12),
    beds: randomIntInRange(1, 12),
    baths: randomIntInRange(1, 10),
    photoUrl: url,
  };
};

const generateOneHost = function generateOneHost(url) {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: randomHostDescription(),
    dateJoined: faker.date.past(),
    language: randomSelectionRange(['Italiano', 'Português', '日本語', 'Français', 'Deutsch', 'English', 'Dansk']),
    responseRate: randomPercentage(),
    responseTime: new Date(),
    responseTime: `${randomIntInRange(1, 48)} hours`,
    hostUrl: url
  }
};

const buildNListings = function buildNListings(n) {
  return buildUserPhotos()
    .then(userPhotos => {
      return buildListingPhotos()
        .then(listingPhotos => {
          return Promise.all(_.map(_.range(n), (k) => {
            let host = generateOneHost(userPhotos[k % userPhotos.length]);
            let listing = generateOneListing(listingPhotos[k % listingPhotos.length]);
            return {
              listing,
              host
            }
          }));
        })
    });
}

module.exports = buildNListings(100);
