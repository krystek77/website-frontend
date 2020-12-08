import styled from 'styled-components/macro';
import { PAGES } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
    background-color:${theme.colors.medium};
    padding:${theme.padding * 3}rem ${theme.padding * 5}rem;
    
  
  `
      : ``}
`;
export const Inner = styled.div<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
  
  
  `
      : ``}
`;
export const Title = styled.h2<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
  text-align:center;
  font-size:3rem;
  margin-bottom:0;
  color:${theme.colors.dark};
  `
      : ``}
`;
