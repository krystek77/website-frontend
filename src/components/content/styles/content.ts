import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PAGES, BREAKPOINT } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  width: 100%;
  min-height: 480px;
  ${({ page, theme }) =>
    page === PAGES.BUSINESSES_PAGE
      ? `
      background-color:#161616;
    `
      : `background-color:transparent;`};
`;
export const Inner = styled.div<{ page?: string }>`
  width: 100%;
  margin: 0 auto;
  max-width: 1170px;

  ${({ page, theme }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE || page === PAGES.PRODUCTS
      ? ` padding:${theme.padding * 10}rem ${theme.padding * 5}rem;
  `
      : `padding:0;`};
  @media (min-width: ${BREAKPOINT.LARGE}) {
    ${({ page, theme }) =>
      page === PAGES.BUSINESS_DETAILS_PAGE &&
      ` 
      display: grid;
      grid-gap: 3rem;
      grid-template-columns: 1fr auto;
    `};
  }
`;
export const Main = styled.main<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    `
      border-right:1px solid ${theme.colors.light};
  `};
  ${({ page, theme }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    ` h2 {text-align:center};
      
  `};
  @media (min-width: ${BREAKPOINT.SMALL}) {
    ${({ theme, page }) =>
      page === PAGES.PRODUCTS &&
      `
      display:grid;
      grid-template-columns:repeat(2,1fr);
      grid-gap:2rem;
  `};
  }
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    ${({ theme, page }) =>
      page === PAGES.PRODUCTS &&
      `
      display:grid;
      grid-template-columns:repeat(3,1fr);
      grid-gap:2rem;
  `};
  }
  @media (min-width: ${BREAKPOINT.LARGE}) {
    ${({ theme, page }) =>
      page === PAGES.PRODUCTS &&
      `
      display:grid;
      grid-template-columns:repeat(4,1fr);
      grid-gap:2rem;
  `};
  }
`;
export const Aside = styled.aside`
  align-self: start;
  ${({ theme }) => `
    background-color:${theme.colors.light};
    padding: ${theme.padding * 4}rem ${theme.padding * 3}rem;
    
  `}
`;
export const TitleLink = styled(ReactRouterLink)`
  font-weight: 600;
  color: black;
  margin-bottom: 1.5rem;
  display: block;
  font-size: 1.6rem;
  text-transform: lowercase;
  text-decoration: underline;
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
