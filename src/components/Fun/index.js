import AlphabetRecord from 'components/AlphabetRecord';
import React, { useState } from 'react';
import { Wrapper, PIWrapper } from './styles';

const PI =
  '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912';
let index = 0;
const TIMEOUT_MS = 25;

export const Fun = ({ lightMode, bgColor, fgColor }) => {
  const [length, setLength] = useState(0);
  const [counting, setCounting] = useState(false);
  let timeout = () => setTimeout(() => startPiTimer(), TIMEOUT_MS);

  const startPiTimer = () => {
    setLength(index);
    index += 1;
    if (index < PI.length) {
      timeout();
    }
  };

  return (
    <Wrapper>
      <p>{'> '}I know 500 digits of π</p>
      <PIWrapper
        lightMode={lightMode}
        bgColor={bgColor}
        fgColor={fgColor}
        className="disable-selection"
        onClick={() => {
          if (counting) return;
          setCounting(true);
          index = 0;
          clearTimeout(timeout);
          startPiTimer();
        }}
      >
        3.14{PI.substr(4, length)}
      </PIWrapper>
      <p>{'> '}In 2020, I was the World's Fastest Smartphone Typer</p>
      <AlphabetRecord
        lightMode={lightMode}
        bgColor={bgColor}
        fgColor={fgColor}
      />
      <p>{'> '}I've been playing the piano for over 15 years</p>
      <p>
        Here's me playing at{' '}
        <a
          href="https://www.youtube.com/watch?v=bTn22GQevjw"
          style={{
            borderBottom: `1px solid ${lightMode ? bgColor : fgColor}`,
            paddingBottom: '2px',
          }}
        >
          9 years
        </a>{' '}
        old,{' '}
        <a
          style={{
            borderBottom: `1px solid ${lightMode ? bgColor : fgColor}`,
            paddingBottom: '2px',
          }}
          href="https://www.youtube.com/watch?v=X9Gy6ZulfNc"
        >
          14 years
        </a>{' '}
        old. I mostly do classical nowadays.
      </p>
    </Wrapper>
  );
};
