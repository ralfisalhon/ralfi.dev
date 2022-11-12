import styled from 'styled-components/macro';

export const Base = styled.div`
  animation-iteration-count: ${({ isPaused, someAnimationState }) =>
    isPaused ? `${someAnimationState}` : 'infinite'};
  transition: left 1s ease;
  left: ${({ isPaused }) => (isPaused ? `-220px` : '0')};

  animation-duration: ${({ isPaused, someAnimationState }) =>
    isPaused ? `3s` : '45s'};

  ${({ isPaused }) => isPaused && `animation-play-state: running`};
`;

export const Item = styled.div`
  animation-iteration-count: ${({ isPaused, someAnimationState }) =>
    isPaused ? `${someAnimationState}` : 'infinite'};

  animation-duration: ${({ isPaused, someAnimationState }) =>
    isPaused ? `3s` : '45s'};
  ${({ selected, isPaused }) => isPaused && !selected && `opacity: 0.5`};

  ${({ isPaused }) => isPaused && `animation-play-state: running`};
`;
export const RoundIcon = styled.img``;
