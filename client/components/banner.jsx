import React from 'react';
import styled from 'styled-components';
import Logo from './logo.jsx';
import Search from './search.jsx';

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 81px;
`;


const Banner = ({ toggleSearchGrow, isSearching }) => {

  return (
    <Main>
      <Logo />
      <Search
        isSearching={isSearching}
        toggleSearchGrow={toggleSearchGrow}
      />
    </Main>
  );
};

export default Banner;