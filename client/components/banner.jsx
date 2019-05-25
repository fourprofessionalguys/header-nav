import React from 'react';
import styled from 'styled-components';
import Logo from './logo.jsx';
import Search from './search.jsx';
import RightNav from './rightNav.jsx';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 81px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 997;
  height: 81px;
`;

const Banner = ({ toggleSearchGrow, isSearching }) => {

  return (
    <Main>
      <SearchContainer>
      <Logo />
        <Search
          isSearching={isSearching}
          toggleSearchGrow={toggleSearchGrow}
        />
      </SearchContainer>
      <RightNav />
    </Main>
  );
};

export default Banner;