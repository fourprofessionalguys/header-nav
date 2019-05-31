import React from 'react';
import Logo from './logo.jsx';
import Search from './search.jsx';
import RightNav from './rightNav.jsx';

const Banner = ({ }) => {

  return (
    <div className="headerNav">
      <div id="hnBanner">
        <div className="hnBannerMain">
          <div className="hnSearchContainer">
            <Logo />
            <Search />
          </div>
          <div className="hnDisplayRightNav">
            <RightNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;