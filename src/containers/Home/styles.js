import styled from 'styled-components/macro';

export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  background: ${({ fgColor, bgColor, lightMode }) => (lightMode ? fgColor : bgColor)};

  h1,
  p {
    color: ${({ fgColor, bgColor, lightMode }) => (lightMode ? bgColor : fgColor)};
  }

  p {
    margin: 0px 3px;
    font-weight: 400;
  }

  font-family: Helvetica;
  letter-spacing: 2px;
  transition: 1s;

  img {
    height: 30px;
    width: 30px;
    margin: 0px 5px;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;
  height: 30px;
`;

export const Button = styled.p`
  transition: 150ms;
  transition-timing-function: ease-out;
  cursor: pointer;

  &:hover {
    font-size: 22px;
    margin: 0px 5px;
    font-weight: 500;
  }

  ${({ selected }) => {
    return selected ? 'font-size: 22px; margin: 0px 20px !important; font-weight: 500;' : '';
  }};
`;

export const SocialButtons = styled.span`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

export const RefreshContainer = styled.div`
  margin: 10px 0px;
`;

export const InfoWrapper = styled.div`
  a {
    color: ${({ fgColor, bgColor, lightMode }) => (lightMode ? bgColor : fgColor)};
    text-decoration-line: none;
  }

  p {
    line-height: 1.15;
  }

  margin-top: 15px;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-timing-function: ease-in;
  animation: fade-in 750ms;
  -webkit-backface-visibility: hidden;
  max-width: 90vw;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 20px;
  margin: -5px 0px -8px;

  p {
    cursor: pointer;
    line-height: 2;
  }

  p:not(:last-child) {
    ::after {
      color: var(--light-color);
      content: ' | ';
    }
  }
`;

export const Resume = styled.div`
  a:not(:last-child) {
    ::after {
      color: var(--${({ lightMode }) => (lightMode ? 'dark' : 'light')}-color);
      content: ' | ';
    }
  }
`;

export const ProjLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  a {
    margin: 0px 8px;
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: 0.5px solid ${({ color }) => color};
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-timing-function: ease-in;
  animation: fade-in 750ms;
`;

export const Awards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 0px 20px;
  text-wrap: wrap;

  a {
    padding: 5px;
    margin: 0px 2px;
    cursor: pointer;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-timing-function: ease-in;
  animation: fade-in 750ms;
  -webkit-backface-visibility: hidden;
`;

export const ProjScreenshots = styled.div`
  margin-top: 10px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  img {
    width: calc(42vh * 0.56);
    height: 42vh;
    border-radius: 20px;
    border: 1px solid lightgray;
  }
`;

export const ProjVideo = styled.div`
  justify-content: center;
  display: flex;

  iframe {
    height: calc(70vh * 0.56);
    width: 70vh;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 3rem;
    width: 3rem;
  }
`;

export const HeaderRow = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SelectedProj = styled.div``;
