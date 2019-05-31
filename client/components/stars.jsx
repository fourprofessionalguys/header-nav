import React from 'react';
import _ from 'underscore';

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