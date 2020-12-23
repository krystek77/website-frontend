import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PAGES, BREAKPOINT } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  width: 100%;
  /* border: 1px solid red; */

  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    `
    padding: ${theme.padding * 10}rem ${theme.padding * 5}rem;
    @media(min-width:${BREAKPOINT.LARGE}){

    }
    
  `}
  ${({ theme, page }) =>
    page === PAGES.TECHNOLOGIES_PAGE &&
    `
      padding: ${theme.padding * 10}rem ${theme.padding * 0}rem;
    
  `}
`;
export const Inner = styled.div<{ page?: string }>`
  /* border: 1px solid green; */
  height: 100%;
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    `
    max-width:1170px;
    margin:0 auto;
    display:flex;
    flex-direction:column-reverse;
    justify-content:flex-start;
    align-items:center;
    @media(min-width:${BREAKPOINT.LARGE}){
      flex-direction:row;
      align-items:flex-start;
    }
    
  `}
`;
export const Main = styled.main<{ page?: string }>`
  /* border: 1px solid blue; */
  width: 100%;
  /* min-height: 480px; */

  ${({ theme, page }) =>
    page === PAGES.PRODUCTS &&
    `
    padding: ${theme.padding * 10}rem ${theme.padding * 5}rem;
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
    grid-column-gap: 20px;
    grid-row-gap:20px;
    background-color:${theme.colors.medium};
    @media(min-width:${BREAKPOINT.LARGE}){
        grid-column-gap: 10px;
        grid-row-gap:20px;
    }
    ;
  `}
  ${({ theme, page }) =>
    page === PAGES.PRODUCT_PAGE &&
    `
      max-width:1170px;
      margin:0 auto;
  `}
`;
export const Aside = styled.aside`
  width: 100%;

  ${({ theme }) => `
  @media (min-width: ${BREAKPOINT.LARGE}) {
    padding-left: ${theme.margin * 5}rem;
    border-left:1px solid ${theme.colors.medium};
    max-width: 320px;
  }
  `}
`;
export const TitleLink = styled(ReactRouterLink)`
  display: block;
  text-transform: lowercase;
  ${({ theme }) => `
      color:${theme.colors.dark};
      margin-bottom: ${theme.margin * 2}rem;
      font-weight:${theme.bold_font};
  `}
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
