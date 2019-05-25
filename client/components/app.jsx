import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Banner from './banner.jsx';
import ListingDisplay from './listingDisplay.jsx';
import ShareModal from './shareModal.jsx';
import BookingFixed from './bookingFixed.jsx';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: white;
  line-height: 1.43;
  color: #484848;
`;

const PageContainer = styled.div`
  display: ${props => props.isModalShowing ? "block" : "none"};
  opacity: ${props => props.isModalShowing ? "0.5" : "0.0"};
  background: transparent;
  width: 100%;
  height: 100vh;
`;

const ListingContainer = styled.div`
  width: 1410px;
  max-height: 100vh;
  margin: 0.1rem 1rem 0 1.5rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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


  render() {
    return (
      <div>
        <ShareModal
          toggleShareModal={this.toggleShareModal}
          selectModal={this.selectShareModal}
          isModalShowing={this.state.isShowingShareModal}
          isModalSelected={this.state.isShareModalSelected}
        />
        <div
          onClick={() => this.state.isSearchSelected ? this.toggleSearchGrow() : undefined}
          onClick={() => this.state.isShowingShareModal ? this.toggleShareModal() : undefined}
        >
          <GlobalStyle />
          <Banner
            isSearching={this.state.isSearchSelected}
            toggleSearchGrow={this.toggleSearchGrow}
          />
          <ListingContainer>
            <ListingDisplay toggleShareModal={this.toggleShareModal} />
          </ListingContainer>
        </div>
        <BookingFixed />
      </div>
    );
  }
}

export default App;