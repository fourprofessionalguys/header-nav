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

const ModalBody = styled.div`
  width: 504;
  padding-bottom: 3rem;
  margin: auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25rem;
  padding: 2px 0 2px 0;
  color: #484848;
  `;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #484848;
  line-height: 1.2857142857142858em;
  margin-top: 0.5rem;
`;

const Section = styled.section`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.43;
  color: #484848;
`;

const Box = styled.div`
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
`;

const SvgBox = styled.svg`
  height: 18px;
  width: 18px;
  display: block;
  fill: rgb(72, 72, 72);
  margin-right: 8px;
`;

const LinkName = styled.div`
  color: rgb(145, 70, 105);
`;

const ShareModalBody = (props) => {

  return (
    <ModalBody>
      <GlobalStyle />
      <Title>Share</Title>
      <SubTitle>Check out this awesome listing on Airbnb: Immaculate Architect's Garden Townhouse.</SubTitle>
      <hr />
      <Section>
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"></path>
          </SvgBox>
          <LinkName>Facebook</LinkName>
        </Box>
        <hr />
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"></path>
          </SvgBox>
          <LinkName>Twitter</LinkName>
        </Box>
        <hr />
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m17.42 18.99c.14-.12.86-.76 2.08-1.86l10.43 8.66h-27.76l10.35-8.67c1.24 1.1 1.98 1.74 2.12 1.85.83.65 1.93.63 2.78.02m11.89-10.67-4.83 4.34c-1.51 1.35-2.8 2.51-3.86 3.46l10.35 8.6c.01.01.01.02.02.03v-17.81c0-.04-.02-.07-.02-.11a3.73 3.73 0 0 0 -.08.07zm-25.19-.7a5347.74 5347.74 0 0 0 4.69 4.19c3.94 3.52 6.51 5.79 6.75 5.97a.76.76 0 0 0 .92.03c.21-.18 2.82-2.52 7.01-6.28l4.82-4.33 1.35-1.21h-27.37l.29.26zm3.66 5.28a4436.65 4436.65 0 0 1 -4.66-4.16c-.56-.5-1.07-.96-1.53-1.37l-.57-.51c0 .03-.01.05-.01.07v17.89l10.38-8.7c-1-.89-2.2-1.95-3.61-3.21"></path>
          </SvgBox>
          <LinkName>Email</LinkName>
        </Box>
        <hr />
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m17.59 19.95-4.07-4.35-7.95 4.35 8.74-9.28 4.17 4.35 7.85-4.35zm-1.59-19.95c-8.84 0-16 6.63-16 14.82 0 4.66 2.33 8.82 5.96 11.54v5.64l5.45-2.99a17.24 17.24 0 0 0 4.59.62c8.84 0 16-6.63 16-14.82 0-8.18-7.16-14.81-16-14.81z"></path>
          </SvgBox>
          <LinkName>Messenger</LinkName>
        </Box>
        <hr />
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m25.78 1.74c0 .41-.33.74-.74.74h-19.55v25.5a.74.74 0 1 1 -1.49 0v-25.75c0-.68.56-1.23 1.24-1.23h19.81c.41 0 .74.33.74.74zm3.22 3.46v25.76a.98.98 0 0 1 -.99.98h-19.8a.99.99 0 0 1 -.99-.98v-25.76c0-.54.44-.98.99-.98h19.81c.54 0 .99.45.99.98zm-17.82 3.47c0 .27.22.5.5.5h5.94a.49.49 0 1 0 0-.99h-5.94a.5.5 0 0 0 -.5.5zm13.86 13.87a.5.5 0 0 0 -.5-.5h-12.87a.49.49 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5zm0-3.96a.5.5 0 0 0 -.5-.5h-12.87a.5.5 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5zm0-3.96a.5.5 0 0 0 -.5-.5h-12.87a.5.5 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5z"></path>
          </SvgBox>
          <LinkName>Copy Link</LinkName>
        </Box>
        <hr />
        <Box>
          <SvgBox viewBox="0 0 32 32">
            <path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-4.19 14.05c.52.45.58 1.24.14 1.76-.25.29-.6.44-.95.44-.29 0-.58-.1-.81-.3l-3.5-3c-.28-.24-.44-.58-.44-.95s.16-.71.44-.95l3.5-3c .52-.45 1.31-.39 1.76.14.45.52.39 1.31-.14 1.76l-2.39 2.05zm6.88-6.69-3 10c-.16.54-.66.89-1.2.89-.12 0-.24-.02-.36-.05-.66-.2-1.04-.9-.84-1.56l3-10c .2-.66.9-1.04 1.56-.84s1.04.9.84 1.56zm3.12 8.59c-.52.45-1.31.39-1.76-.14s-.39-1.31.14-1.76l2.39-2.05-2.39-2.05c-.52-.45-.58-1.24-.14-1.76s1.24-.58 1.76-.14l3.5 3c .58.5.58 1.4 0 1.9z"></path>
          </SvgBox>
          <LinkName>Embeded</LinkName>
        </Box>
        <hr />
      </Section>
    </ModalBody>
  );
};

export default ShareModalBody;