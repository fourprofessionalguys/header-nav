import React from 'react';
import styled from 'styled-components';
import ShareModalBody from './shareModalBody.jsx';

const ModalFixed = styled.div`
  display: ${props => props.isModalShowing ? "table" : "none"};
  position fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 8;
`;

const ModalContainer = styled.div`
  display: ${props => props.isModalShowing ? "table-cell" : "none"};
  z-index: 9;
`;

const ModalInner = styled.div`
  display: ${props => props.isModalShowing ? "table-cell" : "none"};
  vertical-align: middle;
  background: white;
  position: absolute;
  z-index: 10;
  width: 376px;
  min-height: 681px;
  padding: 10px 24px 0px 24px;
  margin: 4rem 0 0 32rem;
  overflow: auto;
  box-shadow: 0 0.01rem 0.8rem rgba(118,118,118,0.3);
`;

const ModalHeader = styled.div`
  font-size: 14px;
  margin: 1rem 0 1.5rem 0;
`;

const CloseButton = styled.button`
  background: white;
  border: 1px solid white;
  padding: 20px;
  margin: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const SvgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: ${props => props.isModalSelected ? "0 .1rem .5rem rgba(118,118,118,0)" : "0 .1rem .5rem rgba(118,118,118,0.5)"};
`;

const SvgButton = styled.svg`
  margin: 7px;
  width: 16px;
  height: 16px;
  display: block;
  fill: rgb(118, 118, 118);
`;

const ShareModal = ({ isModalSelected, isModalShowing, selectModal, toggleShareModal }) => {

  return (
    <ModalFixed isModalShowing={isModalShowing}>
      <ModalContainer isModalShowing={isModalShowing}>
        <ModalInner isModalShowing={isModalShowing} onClick={() => selectModal()}>
          <ModalHeader>
            <CloseButton id="closeButton" onClick={() => toggleShareModal()}>
              <SvgBox isModalSelected={isModalSelected}>
                <SvgButton viewBox=" 0 0 24 24">
                  <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
                  </path>
                </SvgButton>
              </SvgBox>
            </CloseButton>
          </ModalHeader>
          <ShareModalBody />
        </ModalInner>
      </ModalContainer>
    </ModalFixed>
  );
};

export default ShareModal;