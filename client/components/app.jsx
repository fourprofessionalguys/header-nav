import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Banner from './banner.jsx';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: white;
  line-height: 1.43;
  color: #484848;
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
      <div>
        <GlobalStyle />
        <Banner
          isSearching={this.state.isSearchSelected}
          toggleSearchGrow={this.toggleSearchGrow}
        />

      </div>
    );
  }
}

export default App;