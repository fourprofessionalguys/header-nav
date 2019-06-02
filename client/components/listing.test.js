import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './app.jsx';
import ListingDisplay from './listingDisplay.jsx';

describe('Listing Display', () => {

  it('displays listing and photo properly', () => {
    const toggler = jest.fn();
    const wrapper = shallow(<ListingDisplay toggleShareModal={toggler} listingData={{ title: 'Beautiful', listingPhoto: 'https://unsplash.com/photos/0m7Ks0Z00Ro' }} />);

    expect(wrapper.find('#listingTitle').text()).toEqual('Beautiful');
    expect(wrapper.find('.hnListingImage').prop('src')).toEqual('https://unsplash.com/photos/0m7Ks0Z00Ro');
  });
});