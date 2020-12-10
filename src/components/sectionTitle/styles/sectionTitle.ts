import styled from 'styled-components/macro';
import { PAGES } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
    background-color:${theme.colors.dark};
    padding:${theme.padding * 3}rem ${theme.padding * 5}rem;
    
  
  `
      : ``}
`;
export const Inner = styled.div<{ page?: string }>`
  max-width: 1170px;
  margin: 0 auto;
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `

      `
      : page === PAGES.PRODUCTS
      ? `padding:${theme.padding * 10}rem ${theme.padding * 5}rem ${
          theme.padding * 0
        }rem;`
      : ``}
`;
export const Title = styled.h2<{ page?: string }>`
  line-height: 1.2;
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
    text-align:center;
    font-size:3rem;
    margin-bottom:0;
    color:${theme.colors.light};
  `
      : page === PAGES.PRODUCTS
      ? `
      text-align:left;
      font-size:3rem;
      font-weight:700;
      `
      : ``}
`;
export const SubTitle = styled.p<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.PRODUCTS
      ? `
        font-size:2rem;
      `
      : ``}
`;
