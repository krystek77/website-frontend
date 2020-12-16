import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PAGES, BREAKPOINT } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  width: 100%;
  border: 1px solid red;
  ${({ theme }) => `
  `}
`;
export const Inner = styled.div<{ page?: string }>``;
export const Main = styled.main<{ page?: string }>`
  border: 1px solid blue;

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
`;
export const Aside = styled.aside``;
export const TitleLink = styled(ReactRouterLink)``;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
