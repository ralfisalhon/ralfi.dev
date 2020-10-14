import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  p:not(:first-child) {
    margin-top: 10px;
  }
`;

export const PIWrapper = styled.h2`
  cursor: pointer;
  margin-top: 5px;
  word-wrap: break-word;

  color: ${({ fgColor, bgColor, lightMode }) => (lightMode ? bgColor : fgColor)};
`;
