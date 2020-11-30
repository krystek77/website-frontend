import styled from 'styled-components';
export const Container = styled.div<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: absolute;
  opacity: 0.6;
  ${({ top, left, bottom, right }) =>
    `top:${top};
     left:${left};
     bottom:${bottom};
     right:${right}
    `}
`;
export const Inner = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: 0.1rem;
`;
export const Square = styled.div<{ bgColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 0.2rem;
  background-color: ${({ bgColor }) => bgColor};
`;
