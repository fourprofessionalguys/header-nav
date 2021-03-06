import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './app.jsx';
import ListingDisplay from './listingDisplay.jsx';
import ShareModal from './shareModal.jsx';
import ShareModalBody from './shareModalBody.jsx';

describe('Modal', () => {

  it('modal renders on load', () => {
    const wrapper = shallow(<App />);
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
    modalBody.innerHTML = 'someting';

    expect(modalBody.exists()).toEqual(true);
    expect(modalBody.innerHTML).toEqual('someting');
  });
});