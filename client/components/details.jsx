import React from 'react';
import styled from 'styled-components';

const Details = ({ listingData }) => {

  return (
    <div className="headerNav">
      <div id="hnDetails">
        <div className="hnBodyContainer">
          <div className="hnListingDetails">
            <ul className="hnDetailsList">
              <li id="guestsCount" className="hnListItem">{listingData.guests} guests</li>
              <li id="bedroomCount" className="hnListItem">{listingData.bedrooms} bedrooms</li>
              <li id="bedsCount" className="hnListItem">{listingData.beds} beds</li>
              <li id="bathsCount" className="hnListItem">{listingData.baths} bathrooms</li>
            </ul>
            <div id="listingDescription" className="hnDetailsBox">
              {listingData.description}
            </div>
            <hr className="hnDivider" />
          </div>
          <div className="hnHostDetails">
            <img id="hostPhoto" className="hnImage" src={listingData.hostPhoto} alt="" />
            <div className="hnFlex">
              <div id="hostDescription" className="hnHostDescription">
                "{listingData.hostDescription}"
          </div>
              <div id="hostedBy" className="hnHostedBy">
                Hosted by {listingData.hostName}
              </div>
            </div>
            <hr className="hnDivider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;