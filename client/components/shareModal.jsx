import React from 'react';
import styled from 'styled-components';
import ShareModalBody from './shareModalBody.jsx';

const ModalInner = styled.div`
  &&&& { 
    display: ${props => props.isModalShowing ? "table-cell" : "none"};,s
  }
`;



const ShareModal = ({ isModalShowing, toggleShareModal }) => {

  return (
    <div className="headerNav">
      <div id="hnShareModal">
        <ModalInner
          className="hnModalInner"
          onClick={() => selectModal()}
          isModalShowing={isModalShowing}
        >
          <div className="hnModalHeader">
            <button id="closeButton" className="hnCloseButton" onClick={() => toggleShareModal()}>
              <div className="hnSvgBox">
                <svg className="hnSvgButton" viewBox=" 0 0 24 24">
                  <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
                  </path>
                </svg>
              </div>
            </button>
          </div>
          <ShareModalBody id="shareModalBody" />
        </ModalInner>
      </div>
    </div>
  );
};

export default ShareModal;