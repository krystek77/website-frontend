import styled from 'styled-components/macro';
export const Container = styled.div``;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => `margin-bottom:${theme.margin * 2}rem;`}
`;
export const AttributeWrapper = styled.div`
  ${({ theme }) => ``}
`;
export const Line = styled.span`
  font-size: 2.6rem;
  text-transform: capitalize;
  border-radius: 0.4rem;
  ${({ theme }) =>
    `margin-right:${theme.margin * 1}rem;
     color:${theme.colors.light};
     font-weight:${theme.bold_font};
     background-color:${theme.colors.primary};
     padding:${theme.padding}rem;
     `}
`;
export const Title = styled.h3`
  font-size: 2.6rem;
  /* white-space: nowrap; */
  text-transform: uppercase;
  margin-bottom: 0;
  ${({ theme }) =>
    `
  color:${theme.colors.dark};
  font-weight:${theme.bold_font};
  `};
`;
