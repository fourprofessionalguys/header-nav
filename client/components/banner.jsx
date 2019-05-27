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
  @media screen and (min-width: 769px) {
    width: 60%;
  }
  width: 100%;
  height: 81px;
`;

const DisplayRightNav = styled.div`
  @media screen and (min-width: 1024px) {
    display: block;
  }
  
  @media screen and (max-width: 1024px) {
    display: none;
    width: 0px;
  }
`;

const Banner = ({ }) => {

  return (
    <Main>
      <SearchContainer>
        <Logo />
        <Search
        />
      </SearchContainer>
      <DisplayRightNav>
        <RightNav />
      </DisplayRightNav>
    </Main>
  );
};

export default Banner;