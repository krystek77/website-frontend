import styled from 'styled-components/macro';
export const Container = styled.div``;
export const Inner = styled.div``;
export const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  ${({ theme }) => `
   padding-bottom:${theme.padding * 1}rem;
   margin-right:${theme.padding * 2}rem;
  `};
`;
export const Value = styled.span`
  font-size: 1.8rem;
  ${({ theme }) => `
   color:${theme.colors.primary};
   padding-bottom:${theme.padding * 1}rem;
  `};
`;
