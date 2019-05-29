import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Axios from 'axios';
import Banner from './banner.jsx';
import ListingDisplay from './listingDisplay.jsx';
import ShareModal from './shareModal.jsx';
import Details from './details.jsx';
import BookingFixed from './bookingFixed.jsx';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: white;
  line-height: 1.43;
  color: #484848;
`;

const Body = styled.div`
  margin-bottom: 100px;
`;

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      isSearchSelected: false,
      isShowingShareModal: false,
      isShareModalSelected: false
    };

    this.toggleSearchGrow = this.toggleSearchGrow.bind(this);
    this.toggleShareModal = this.toggleShareModal.bind(this);
    this.selectShareModal = this.selectShareModal.bind(this);
  }

  toggleSearchGrow() {
    this.setState({
      isSearchSelected: !this.state.isSearchSelected
    });
  }

  toggleShareModal() {
    this.setState({
      isShowingShareModal: !this.state.isShowingShareModal,
      isShareModalSelected: false
    });
  }

  selectShareModal() {
    this.setState({
      isShareModalSelected: true
    });
  }

  componentDidMount() {
    Axios('http://localhost:3001/listings/1')
      .then(res => res.data)
      .then(data => {
        this.setState({
          listing: data
        });
      });
  }

  render() {
    return (
      <Body>
        <ShareModal
          id="shareModal"
          toggleShareModal={this.toggleShareModal}
          selectModal={this.selectShareModal}
          isModalShowing={this.state.isShowingShareModal}
          isModalSelected={this.state.isShareModalSelected}
        />
        <GlobalStyle />
        <Banner
        />
        <ListingDisplay
          listingData={this.state.listing}
          toggleShareModal={this.toggleShareModal}
        />
        <Details listingData={this.state.listing} />
        <BookingFixed listingData={this.state.listing} />
      </Body>
    );
  }
}

export default HeaderNav;