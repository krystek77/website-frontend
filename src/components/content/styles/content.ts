import styled from 'styled-components/macro';
import { PAGES } from '../../../constants';
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
    ` 
      display: grid;
      grid-gap: 1.5rem;
      grid-template-columns: 1fr auto;
    `};
`;
