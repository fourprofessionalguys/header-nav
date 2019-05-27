import React from 'react';
import { shallow, mount } from 'enzyme';
import Details from './details.jsx';

describe('details', () => {

  it('renders data properly', () => {
    const fakeData = {
      guests: 6,
      bedrooms: 5,
      beds: 6,
      baths: 7.5,
      description: 'lovely',
      hostPhoto: 'https://unsplash.com/photos/0m7Ks0Z00Ro',
      hostDescription: 'nice',
      hostName: 'John'
    };
    const wrapper = shallow(<Details listingData={fakeData} />);

    expect(wrapper.find('#guestsCount').text()).toEqual('6 guests');
    expect(wrapper.find('#bedroomCount').text()).toEqual('5 bedrooms');
    expect(wrapper.find('#bedsCount').text()).toEqual('6 beds');
    expect(wrapper.find('#bathsCount').text()).toEqual('7.5 bathrooms');
    expect(wrapper.find('#listingDescription').text()).toEqual('lovely');
    expect(wrapper.find('#hostPhoto').prop('src')).toEqual('https://unsplash.com/photos/0m7Ks0Z00Ro');
    expect(wrapper.find('#hostDescription').text()).toEqual('"nice"');
    expect(wrapper.find('#hostedBy').text()).toEqual('Hosted by John');
  });
});