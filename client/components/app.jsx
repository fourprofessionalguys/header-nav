import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Banner from './banner.jsx';
import ListingDisplay from './listingDisplay.jsx';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: white;
  line-height: 1.43;
  color: #484848;
`;

const PageContainer = styled.div`
  width: 1410px;
  margin: 0.1rem 1rem 0 1.5rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchSelected: false
    };

    this.toggleSearchGrow = this.toggleSearchGrow.bind(this);
  }

  toggleSearchGrow() {
    this.setState({
      isSearchSelected: !this.state.isSearchSelected
    });
  }




  render() {
    return (
      <div onClick={() => this.state.isSearchSelected ? this.toggleSearchGrow() : undefined}> 
        <GlobalStyle />
        <Banner
          isSearching={this.state.isSearchSelected}
          toggleSearchGrow={this.toggleSearchGrow}
        />
        <PageContainer>
          <ListingDisplay />
        </PageContainer>
      </div>
    );
  }
}

export default App;