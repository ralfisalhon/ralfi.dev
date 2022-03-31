import styled from 'styled-components/macro';

export const Main = styled.div`
  background: var(--dark-color);
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

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

export const Wrapper = styled.div``;

export const Words = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 8px;
  border: 1px solid var(--light-color);
  border-radius: 0.3rem;
  line-height: 1;
  width: 600px;
  margin: 10px 0px 15px 0px;
`;
export const Word = styled.div`
  color: var(--light-color);
  ${({ selected, color }) => selected && `color: ${color}`};

  transition: all 400ms ease-out;
  user-select: none;
  margin-left: ${({ index, currentIndex, width }) =>
    currentIndex > index ? `-${width}px` : '8px'};

  ${({ selected }) => !selected && `cursor: pointer`};

  z-index: ${({ visible }) => (visible ? 1 : 0)};

  opacity: 0.5;
  ${({ selected, currentIndex, index }) =>
    selected
      ? `opacity: 1;`
      : currentIndex < index
      ? `&:hover {
    opacity: 0.9;
  }`
      : 'opacity: 0'};

  ${({ visible }) => visible && 'opacity: 1'};
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
  transition: 500ms;
  height: 100px;
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
  max-width: 400px;
  margin-right: 10px;
  a {
    color: var(--light-color);
    text-decoration-line: none;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

export const Resume = styled.div``;
