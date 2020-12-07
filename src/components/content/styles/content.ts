import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PAGES, BREAKPOINT } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  width: 100%;
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
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    ` padding: 4rem 1.5rem;
      
  `};
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
export const Main = styled.main`
  ${({ theme }) => `
      border-right:1px solid ${theme.colors.light};
  `}
`;
export const Aside = styled.aside`
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
