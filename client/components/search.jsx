import React from 'react';
import styled, { keyframes } from 'styled-components';

const GrowDiv = keyframes`
  0% {
    width: 460px;
  }
  100% {
    width: 543px;
  }
`;

const ShrinkDiv = keyframes`
  0% {
    width: 543px;
  }
  100% {
    width: 460px;
  }
`;

const GrowInput = keyframes`
  0% {
    width: 360px;
  }
  100% {
    414px;
  }
`;

const ShrinkInput = keyframes`
  0% {
    width: 414px;
  }
  100% {
    width: 360px;
  }
`;

const Main = styled.div`
  min-width: 460px;
  animation: ${props => props.isSearching ? GrowDiv : ShrinkDiv} 0.25s ease-out;
  animation-fill-mode:forwards;
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0.1rem 0.3rem rgba(118,118,118,0.3);
  &:hover {
    box-shadow: 0 0.2rem 0.3rem rgba(118,118,118,0.3);
  }
  border-radius: 2px;
  border: 1px solid rgba(118,118,118,0.1);
`;

const SearchIcon = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 0.8rem;
  width: 3rem;
  height: 3rem;
`;

const StyledSvg = styled.svg`
  height: 18px;
  width: 18px;
  fill: rgb(72, 72, 72);
`;

const Input = styled.input`
  font-weight: 700;
  display; inline-block;
  width: 360px;
  animation: ${props => props.isSearching ? GrowInput : ShrinkInput} 0.25s ease-out;
  animation-fill-mode: forwards;
  border: none;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-source: none;
  border-style: none;
  height: 2.5rem;
  &:focus {
    outline: none;
  }
`;

const Search = ({ toggleSearchGrow, isSearching }) => {

  return (
    <Main
      isSearching={isSearching}
      onClick={() => toggleSearchGrow()}
    >
      <SearchIcon>
        <StyledSvg>
          <path viewBox="0 0 16 16" d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
        </StyledSvg>
      </SearchIcon>
      <Input isSearching={isSearching} type="text" placeholder="Search" />
    </Main>
  );
};

export default Search;