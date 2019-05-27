import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: white;
  line-height: 1.43;
  color: #484848;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  @media screen and (min-width: 831px) {
    margin-left: 2rem;
  }
`;

const TitleColumn = styled.div`
  max-height: 272px;
  min-width: 95%;
  order: 2;
  padding: 0 40px 0 40px;
  background: white;

  @media screen and (min-width: 830px) {
    order: 1;
    min-width: 30.888888%;
    max-width: 30.888888%;
    min-height: 428px;
    max-height: 428px;
    margin: 0 0.6% 0 0.6%;
    background: #F2F2F2;
    padding: 40px;
  }

  @media screen and (min-width: 1130px) {
    min-height: 536px;
  }
  `;

const ImageColumn = styled.div`
  min-width: 97.5%;
  height: 650px;
  margin: 0 0.6% 0 0.6%;
  position: relative;

  @media screen and (min-width: 300px) {
    max-height: 428px;
  }

  @media screen and (min-width: 830px) {
    order: 2;
    height: 428px;
    min-width: 64.111111%;
    max-width: 64.111111%;
  }

  @media screen and (min-width: 1130px) {
    height: 536px;
    max-height: 536px;
  }
`;

const TitleSvg = styled.svg`
  height: 44px;
  font-size: 14px;
  fill: rgb(145, 70, 105);
`;

const ListingTitleBox = styled.div`
  margin-top: 24px;
`;

const ListingTitle = styled.span`
  @media screen and (min-width: 1024px) {
    font-size: 42px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }
  font-weight: 300;
  line-height: 46px;
  color: #484848;
  text-overflow: ellipsis;
`;

const ListingImageBox = styled.div`
  height: 100%;
  background: url('${props => props.listingPhoto ? props.listingPhoto : 'https://s3.amazonaws.com/airbnbcloneinteriorphotos/FqqiAvJejto.jpg'}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 2.5%;
  margin-bottom: 0;

  @media screen and (min-width: 300px) {
    width: 100%;
    max-height: 100%;
  }

  @media screen and (min-width: 1024px) {
    height: 428px;
    margin: 0;
  }

  @media screen and (min-width: 1130px) {
    height: 536px;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top 24px;
  right: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100px;
`;

const ShareButton = styled.button`
  height: 40px;
  width: 40px;
  color: rgba(0, 0, 0, 0.847);
  cursor: pointer;
  margin: 0;
  background: white;
  display: inline-block;
  text-align: center;
  line-height: 1;
  border: 4px solid white;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const ShareSpan = styled.span`
  box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.14);
`;

const ShareSvg = styled.svg`
  height: 16px;
  width: 16px;
  display: block;
  fill: currentColor;
`;

const ListingDisplay = ({ listingData, toggleShareModal }) => {
  return (
    <Main>
      <GlobalStyle />
      <TitleColumn>
        <TitleSvg viewBox="0 0 66 34">
          <path d="M14.71 21.18a8.685 8.685 0 0 0-.236-.588 55.599 55.599 0 0 0-.376-.84l-.01-.022a189.383 189.383 0 0 0-3.543-7.371l-.052-.104c-.127-.25-.258-.508-.392-.762a4.957 4.957 0 0 0-.576-.901 2.656 2.656 0 0 0-4.115 0 4.978 4.978 0 0 0-.576.902 49.03 49.03 0 0 0-.395.768l-.049.097A189.54 189.54 0 0 0 .847 19.73l-.016.036c-.122.27-.249.548-.37.826a8.59 8.59 0 0 0-.235.588 3.66 3.66 0 0 0-.191 1.756 3.463 3.463 0 0 0 2.092 2.716 3.424 3.424 0 0 0 1.733.233 4.261 4.261 0 0 0 1.613-.553c.65-.372 1.293-.917 1.995-1.695.701.778 1.344 1.323 1.994 1.695a4.26 4.26 0 0 0 1.613.553 3.424 3.424 0 0 0 1.734-.233 3.464 3.464 0 0 0 2.092-2.716c.081-.58.019-1.155-.191-1.756zm-7.242.906c-.873-1.126-1.433-2.17-1.63-3.047a2.741 2.741 0 0 1-.056-1.004c.04-.259.127-.49.26-.687.301-.446.834-.713 1.426-.713.591 0 1.124.267 1.425.713.134.197.221.428.26.687.045.299.026.637-.056 1.005-.197.876-.757 1.92-1.63 3.046zm6.448.763a2.433 2.433 0 0 1-1.47 1.908 2.47 2.47 0 0 1-1.236.165 3.227 3.227 0 0 1-1.233-.429c-.582-.332-1.17-.843-1.833-1.592 1.054-1.323 1.713-2.542 1.957-3.629a3.79 3.79 0 0 0 .07-1.396 2.704 2.704 0 0 0-.428-1.12c-.494-.73-1.344-1.167-2.276-1.167-.93 0-1.78.437-2.274 1.167a2.705 2.705 0 0 0-.429 1.12c-.065.429-.041.899.07 1.395.244 1.087.903 2.307 1.958 3.63-.663.75-1.252 1.26-1.833 1.592-.42.24-.824.38-1.234.429a2.47 2.47 0 0 1-1.236-.165 2.433 2.433 0 0 1-1.47-1.908 2.608 2.608 0 0 1 .144-1.266c.057-.164.125-.326.208-.518.118-.271.243-.547.365-.814l.016-.036c1.11-2.444 2.3-4.922 3.54-7.365l.049-.097c.126-.25.256-.507.388-.755.137-.258.274-.508.455-.723a1.639 1.639 0 0 1 1.284-.614c.502 0 .946.213 1.283.614.181.215.319.464.455.722.13.247.26.502.385.749l.053.104c1.24 2.443 2.43 4.92 3.54 7.365l.01.022c.123.272.25.552.37.828.084.193.151.354.209.518.156.447.201.85.143 1.266zm27.27-6.223c0-4.717.595-9.032 1.643-11.966.708-2.042 1.615-3.567 2.804-3.567 1.048 0 1.643 1.237 1.643 3.222 0 2.531-.85 5.523-2.237 8.485-1.02 2.186-2.352 4.315-3.796 6.242a62.931 62.931 0 0 1-.057-2.416zm-6.09 9.377c1.784-1.006 3.597-2.56 5.269-4.458.51 3.279 1.586 4.343 2.86 4.343 1.417 0 2.777-1.323 3.966-3.71v.46c0 2.474 1.105 3.25 2.096 3.25 1.473 0 2.918-1.668 4.08-4.4-.029.488-.029.718-.029 1.035 0 2.502.907 3.25 1.955 3.25.963 0 1.756-.69 2.606-2.128.198-.345-.057-.806-.454-.806a.547.547 0 0 0-.481.288c-.51.92-.992 1.553-1.586 1.553-.822 0-.907-1.208-.907-2.157 0-1.38.172-3.634.425-4.976a.549.549 0 0 0-.538-.662.587.587 0 0 0-.567.431c-1.076 3.97-2.747 7.48-4.334 7.48-.793 0-1.133-.95-1.133-2.187 0-1.41.284-3.106.793-5.005a.555.555 0 0 0-.538-.69c-.226 0-.481.144-.538.374-1.275 4.314-3.06 7.507-4.674 7.507-1.161 0-1.756-1.61-2.01-4.17a35.162 35.162 0 0 0 4.701-7.364c1.445-3.136 2.351-6.3 2.351-8.946C48.41.949 46.993 0 45.69 0c-1.529 0-2.945 1.467-3.936 4.257-1.048 3.05-1.7 7.479-1.7 12.37 0 1.322.057 2.473.142 3.48-1.757 2.042-3.683 3.797-5.609 4.918-.255.144-.368.49-.227.748.142.26.482.374.737.23zM25.493 34c.312 0 .595-.259.595-.575 0-2.532.113-5.063.368-7.537 5.156-.46 11.076-5.465 11.076-10.671 0-3.596-2.55-5.638-5.92-5.638-3.286 0-7.45 2.1-10.906 5.58-.227.201-.227.575 0 .805.198.23.567.23.793 0 3.23-3.192 7.054-5.235 10.084-5.235 2.72 0 4.76 1.64 4.76 4.488 0 4.602-5.184 9.003-9.773 9.492.425-3.653 1.104-7.191 2.04-10.298.084-.287-.114-.633-.397-.72-.312-.085-.652.087-.737.375-.935 3.222-1.643 6.875-2.096 10.7-1.105-.057-2.068-.345-3.144-.977-.284-.144-.623-.03-.793.23a.642.642 0 0 0 .226.805c1.275.662 2.38 1.007 3.598 1.093a82.746 82.746 0 0 0-.369 7.508c0 .316.284.575.595.575zm38.524-15.792c.227.173.595.144.765-.086.765-.978 1.218-2.014 1.218-2.905 0-1.324-.878-2.158-2.493-2.158-3.116 0-6.118 3.222-6.118 5.696 0 1.582 1.076 2.646 3.229 3.049l1.331.23c1.388.23 2.323.719 2.323 1.697 0 1.064-1.161 1.64-2.38 1.64-.906 0-1.699-.317-2.322-.748a.532.532 0 0 0-.737.115.551.551 0 0 0 .114.748 4.843 4.843 0 0 0 2.946.978c2.01 0 3.512-1.151 3.512-2.79 0-1.324-.991-2.33-3.286-2.733l-1.331-.23c-1.36-.23-2.266-.834-2.266-1.985 0-1.985 2.493-4.574 4.957-4.574.85 0 1.388.374 1.388 1.151 0 .604-.34 1.38-.935 2.129a.586.586 0 0 0 .085.776z"></path>
        </TitleSvg>
        <ListingTitleBox>
          <ListingTitle id="listingTitle">{listingData.title}</ListingTitle>
        </ListingTitleBox>
      </TitleColumn>
      <ImageColumn>
        <ListingImageBox
          id="listingPhotoBox"
          listingPhoto={listingData.listingPhoto}
          className=""
        >
          <ButtonsContainer>
            <ShareButton id="shareModalButton" onClick={() => toggleShareModal()}>
              <ShareSpan>
                <ShareSvg viewBox="0 0 24 24">
                  <path d="m22.19 8.5h-3.14a.81.81 0 0 0 -.81.8c0 .44.36.8.81.8h2.33v12.31h-18.76v-12.31h3.11c.45 0 .81-.36.81-.8a.81.81 0 0 0 -.81-.8h-3.92a.81.81 0 0 0 -.81.8v13.91c0 .44.36.8.81.8h20.38c.45 0 .81-.36.81-.8v-13.91a.81.81 0 0 0 -.81-.8zm-14.11-3.82c.19 0 .36-.06.51-.18l2.01-1.58.6-.47v13.79c0 .44.36.8.81.8s.81-.36.81-.8v-13.79l.59.47 2.01 1.58a.8.8 0 0 0 .5.18.81.81 0 0 0 .63-.3.79.79 0 0 0 -.13-1.12l-3.92-3.09a.42.42 0 0 0 -.07-.04l-.07-.03-.01-.01-.05-.03a.76.76 0 0 0 -.3-.06.81.81 0 0 0 -.3.06l-.01.01-.06.04-.07.03a.42.42 0 0 0 -.07.04l-3.92 3.09a.79.79 0 0 0 -.13 1.12c.16.19.39.3.63.3z"></path>
                </ShareSvg>
              </ShareSpan>
            </ShareButton>
            <ShareButton onClick={() => toggleShareModal()}>
              <ShareSpan>
                <ShareSvg viewBox="0 0 24 24">
                  <path d="M17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8C10.5 4.1 8.3 2.5 5.9 3 4.4 3.2 3 4.2 2.3 5.6c-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"></path>
                </ShareSvg>
              </ShareSpan>
            </ShareButton>
          </ButtonsContainer>
        </ListingImageBox>
      </ImageColumn>
    </Main>
  );
};

export default ListingDisplay;