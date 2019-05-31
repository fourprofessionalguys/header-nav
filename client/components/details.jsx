import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  &&& { 
    max-width: 95%;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 1024px) {
      height: 288px;
    }
  }
`;

const ListingDetails = styled.div`
  &&& { 
    @media screen and (min-width: 1024px) {
      min-width: 53%;
      max-width: 53%;
    }
    min-width: 100%;
  }
`;

const DetailsList = styled.ul`
  &&& { 
    display: flex;
    align-items: center;
    max-width: 500px;
  }
`;

const ListItem = styled.li`
  &&& { 
    list-style: none;
    font-size: 14px;
    font-weight: 700;
    padding: 0 0.6rem;
    color: #484848;
  }
`;

const DetailsBox = styled.div`
  &&& { 
    padding: 1rem;
    font-weight: 300;
    max-width: 400px;
  }
`;

const HostDetails = styled.div`
  &&& { 
    @media screen and (min-width: 1024px) {
      width: 200px;
    }
    
    display: flex;
    @media screen and (max-width: 1024px) {
      align-items: left;
      margin: 5rem 5rem 5rem 0;
      min-width: 100%;
      order: 2;
    }
  }
`;

const Image = styled.img`
  &&& { 
    float: left;
    height: 88px;
    width: 88px;
    display: block;
    border-radius: 50%;
  }
`;

const HostDescription = styled.div`
  &&& { 
    font-size: 16px;
    font-weight: 300;
    line-height: 1.75rem;
    color: #484848;
    margin-left: 1rem;
    width: 100%;
    @media screen and (min-width: 500px) {
      width: 350px;
    }
  }
`;

const HostedBy = styled.div`
  &&& { 
    font-size: 16px;
    font-weight: 700;
    color: #484848;
    @media screen and (min-width: 1024px) {
      margin: 0.5rem 0 0 1rem;
    }
    @media screen and (max-width: 1024px) {
      margin: 0.5rem 0 0 2rem;
    }
  }
`;

const Flex = styled.div`
  &&& { 
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`;

const Divider = styled.hr`
  &&& { 
    @media screen and (min-width: 1024px) {
      display: none;
    }
    display: block;
  }
`;

const Details = ({ listingData }) => {

  return (
    <div className="headerNav">
      <div id="hndetails">
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
              <hr />
            </div>
            <hr className="hnDivider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;