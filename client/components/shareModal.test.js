import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderNav from './headerNav.jsx';
import ListingDisplay from './listingDisplay.jsx';
import ShareModal from './shareModal.jsx';
import ShareModalBody from './shareModalBody.jsx';

describe('Modal', () => {

  it('modal renders on load', () => {
    const wrapper = shallow(<HeaderNav />);
    expect(wrapper.find('#shareModal').length).toEqual(1);
  });

  it('displays modal when state is changed', () => {
    const modal = shallow(<ShareModal isModalShowing={true} />);

    expect(modal.exists()).toEqual(true);
  });

  it('renders text of modal when modal is showing', () => {
    // const toggler = jest.fn()
    // const wrapper = mount(<ListingDisplay listingData={[]} toggleShareModal={toggler} />);
    const modal = shallow(<ShareModal isModalShowing={true} />);
    const modalBody = shallow(<ShareModalBody />);
    const expectedString = '<GlobalStyleComponent />ShareCheck out this awesome listing on Airbnb: Immaculate Architect\'s Garden Townhouse.FacebookTwitterEmailMessengerCopy LinkEmbeded';

    expect(modalBody.exists()).toEqual(true);
    expect(modalBody.text()).toEqual(expectedString);
  });
});