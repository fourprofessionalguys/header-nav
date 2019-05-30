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
    <Main>
      <ListingDetails>
        <DetailsList>
          <ListItem id="guestsCount">{listingData.guests} guests</ListItem>
          <ListItem id="bedroomCount">{listingData.bedrooms} bedrooms</ListItem>
          <ListItem id="bedsCount">{listingData.beds} beds</ListItem>
          <ListItem id="bathsCount">{listingData.baths} bathrooms</ListItem>
        </DetailsList>
        <DetailsBox id="listingDescription">
          {listingData.description}
        </DetailsBox>
        <Divider></Divider>
      </ListingDetails>
      <HostDetails className="col-5">
        <Image id="hostPhoto" src={listingData.hostPhoto} alt="" />
        <Flex>
          <HostDescription id="hostDescription">
            "{listingData.hostDescription}"
          </HostDescription>
          <HostedBy id="hostedBy">
            Hosted by {listingData.hostName}
          </HostedBy>
          <hr />
        </Flex>
        <Divider></Divider>
      </HostDetails>
    </Main>
  );
};

export default Details;