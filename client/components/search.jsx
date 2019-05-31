import React from 'react';
import styled, { keyframes } from 'styled-components';

const GrowDiv = keyframes`
  &&& { 
    0% {
      width: 460px;
    }
    100% {
      width: 543px;
    }
  }
`;

const ShrinkDiv = keyframes`
  &&& { 
    0% {
      width: 543px;
    }
    100% {
      width: 460px;
    }
  }
`;

const GrowInput = keyframes`
  &&& { 
    0% {
      width: 360px;
    }
    100% {
      414px;
    }
  }
`;

const ShrinkInput = keyframes`
  &&& { 
    0% {
      width: 414px;
    }
    100% {
      width: 360px;
    }
  }
`;

const Search = ({ }) => {

  return (
    <div className="headerNav">
      <div id="hnSearch">
        <div className="hnBodyContainer">
          <div className="hnSearchIcon">
            <svg className="hnStyledSvg">
              <path viewBox="0 0 16 16" d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
            </svg>
          </div>
          <input type="text" className="hnInput" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Search;