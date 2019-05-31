import React from 'react';
import styled from 'styled-components';
import ShareModalBody from './shareModalBody.jsx';

const ModalInner = styled.div`
  &&&& { 
    display: ${props => props.isModalShowing ? "table-cell" : "none"};,s
  }
`;

const ModalHeader = styled.div`
  &&&& { 
    font-size: 14px;
    margin: 1rem 0 1.5rem 0;
  }
`;

const CloseButton = styled.button`
  &&& { 
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
  }
`;

const SvgBox = styled.div`
  &&& { 
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: ${props => props.isModalSelected ? "0 .1rem .5rem rgba(118,118,118,0)" : "0 .1rem .5rem rgba(118,118,118,0.5)"};
  }
`;

const SvgButton = styled.svg`
  &&& { 
    margin: 7px;
    width: 16px;
    height: 16px;
    display: block;
    fill: rgb(118, 118, 118);
  }
`;

const ShareModal = ({ isModalSelected, isModalShowing, selectModal, toggleShareModal }) => {

  return (
    <div className="headerNav">
      <div id="hnShareModal">
        <ModalInner isModalShowing={isModalShowing}>
          <div className="hnModalInner" onClick={() => selectModal()}>
            <div className="hnModalHeader">
              <button id="closeButton" className="hnCloseButton" onClick={() => toggleShareModal()}>
                <div className="hnSvgBox" isModalSelected={isModalSelected}>
                  <svg className="hnSvgButton" viewBox=" 0 0 24 24">
                    <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
            <ShareModalBody id="shareModalBody" />
          </div>
        </ModalInner>
      </div>
    </div>
  );
};

export default ShareModal;