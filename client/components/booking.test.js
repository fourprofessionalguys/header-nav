import React from 'react';
import { shallow, mount } from 'enzyme';
import BookingFixed from './bookingFixed.jsx';
import Stars from './stars.jsx';

describe('Booking Fixed Banner', () => {

  it('displays data properly', () => {
    const fakeData = {
      type: 'townhouse',
      cost: 189
    };
    const wrapper = shallow(<BookingFixed listingData={fakeData} />);

    expect(wrapper.find('#listingType').text()).toEqual('Entire townhouse');
    expect(wrapper.find('#listingCost').text()).toEqual('$189 / night');
  });

  it('displays proper number of stars for listing', () => {
    const wrapper = shallow(<Stars starCount={5} />);

    expect(wrapper.children().length).toEqual(5);
  });
});