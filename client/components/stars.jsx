import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const StarBox = styled.div`
  &&& { 
    display: inline-block;
    font-size: 10px;
    color: #914669;
    margin: 0 0.25rem 0.5rem 0;
  }
`;

const Stars = ({ starCount }) => {

  return (
    <div className="headerNav">
      <div id="hnStars">
        <div className="hnStarBox">
          {_.map(_.range(starCount), (k) => <i key={k} className="fas fa-star"></i>)}
        </div>
      </div>
    </div>
  );
};

export default Stars;