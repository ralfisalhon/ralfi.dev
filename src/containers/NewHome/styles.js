import styled from 'styled-components/macro';

export const Main = styled.div`
  background: var(--dark-color);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: scroll;

  font-family: Montserrat;

  color: var(--light-color);

  p,
  a {
    margin: 0px;
    padding: 0px;
  }
  line-height: 1;
  font-size: 1.5rem;
`;

export const Wrapper = styled.div`
  transition: height 1s ease-in-out;
  height: ${({ height }) => height}vh;
  ${({ animationDelay }) =>
    animationDelay && `transition-delay: ${animationDelay}ms`};

  display: flex;
  flex-direction: column;
`;

const WIDTHS = [-8, 41, 146, 256, 365];
export const Word = styled.div`
  color: var(--light-color);
  ${({ selected, color }) => selected && `color: ${color}`};

  transition: all 400ms ease-out;
  user-select: none;

  margin-left: ${({ visible, currentIndex }) =>
    visible ? `${-WIDTHS[currentIndex]}px` : '8px'};

  ${({ selected }) => !selected && `cursor: pointer`};

  // Default non-hovered
  opacity: 0.5;
  ${({ selected, currentIndex, index, visible }) =>
    selected
      ? // Selected
        `opacity: 1;`
      : currentIndex < index
      ? // Hovered
        `&:hover {
    opacity: 0.9;
  }`
      : !visible && // After out of view
        `opacity: 0.15; 
        &:hover {
          opacity: 0.5;
        };
        ${
          currentIndex - 1 === index && `&::after { color: var(--dark-color); }`
        }
        `};

  ${({ visible }) => visible && 'opacity: 1'};
`;

export const Words = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 12px 8px 10px 8px;
  line-height: 1;
  width: 525px;
  background: var(--dark-color);
  border-radius: 4px;

  ::after {
    color: var(--light-color);
    content: '';
    opacity: 0.6;
  }

  ${Word}:not(:last-child):not(:first-child) {
    ::after {
      content: ',';
    }
  }
  ${({ index }) =>
    `${Word}:nth-child(${index + 1}) {
    ::after {
      opacity: 0.5;
    }
  }`};
`;

export const Name = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 10px;
  ${({ index }) => index !== 0 && `cursor: pointer`};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const SocialButtons = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: auto;

  img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    opacity: 0.9;
  }
`;

export const InfoBox = styled.div`
  font-size: 1rem;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  a {
    color: var(--light-color);
    text-decoration-line: none;
  }
`;

export const Resume = styled.div``;

export const Emoji = styled.img`
  transition: transform 1.5s;
  transform: rotate(0deg);
  transition-delay: 500ms;
  ${({ index }) =>
    index === 0 &&
    `&:hover {
    transform: rotate(360deg);
  }`};
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 20px;

  transition: 500ms;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  padding-right: 5px;
  cursor: pointer;
`;
