import React from 'react';
import styled from 'styled-components';

const Main = styled.div`

`;

const NavList = styled.ul`
  &&& { 
    list-style: none;
    display: flex;
    align-items: center;
    height: 81px;
    margin-right: 1rem;
  }
`;

const ListItem = styled.li`
  &&& { 
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
  }
`;

const RightNav = (props) => {

  return (
    <div className="headerNav">
      <div id="hnRightNav">
        <ul className="hnNavList">
          <li className="hnListItem">Become a Host</li>
          <li className="hnListItem">Help</li>
          <li className="hnListItem">Sign Up</li>
          <li className="hnListItem">Log in</li>
        </ul>
      </div>
    </div>
  );
};

export default RightNav;