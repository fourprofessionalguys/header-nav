import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 1281px;
  height: 288px;
  margin: 3rem auto;
  border: 0px solid black;
  display: flex;
  justify-content: space-between
`;

const DetailsList = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 14px;
  font-weight: 700;
  padding: 0 0.6rem;
  color: #484848;
`;

const DetailsBox = styled.div`
  padding: 1rem;
  font-weight: 300;
  max-width: 500px;
`;

const HostDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
`;

const Image = styled.img`
  height: 88px;
  width: 88px;
  display: block;
  border-radius: 50%;
`;

const HostDescription = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75rem;
  color: #484848;
  margin-left: 1rem;
  width: 350px;
`;

const HostedBy = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #484848;
  margin-top: -5rem;
  margin-left: 6.5rem;
`;

const Details = ({ listingData }) => {

  return (
    <Main>
      <nav className="col-7">
        <DetailsList>
          <ListItem>{listingData.guests} guests</ListItem>
          <ListItem>{listingData.bedrooms} bedrooms</ListItem>
          <ListItem>{listingData.beds} beds</ListItem>
          <ListItem>{listingData.baths} baths</ListItem>
        </DetailsList>
        <DetailsBox>
          {listingData.description}
        </DetailsBox>
      </nav>
      <HostDetails className="col-5">
        <Image src={listingData.hostPhoto} alt="" />
        <HostDescription>
          "{listingData.hostDescription}"
        </HostDescription>
        <HostedBy>
          Hosted by {listingData.hostName}
        </HostedBy>
      </HostDetails>
    </Main>
  );
};

export default Details;