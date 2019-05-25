import React from 'react';
import styled from 'styled-components';

const Main = styled.div`

`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 81px;
  margin-right: 1rem;
`;

const ListItem = styled.li`
  font-size: 14px;
  padding: 3rem 1rem 3rem 1rem;
  text-align: center;
  height: 81px;
  border-bottom: 2px solid white;
  &:hover {
    border-bottom: 2px solid rgb(72,72,72);
  }
  cursor: pointer;
  color: #484848;
`;

const RightNav = (props) => {

  return (
    <Main>
      <NavList>
        <ListItem>Become a Host</ListItem>
        <ListItem>Help</ListItem>
        <ListItem>Sign Up</ListItem>
        <ListItem>Log in</ListItem>
      </NavList>
    </Main>
  );
};

export default RightNav;