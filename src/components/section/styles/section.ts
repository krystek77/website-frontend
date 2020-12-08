import styled from 'styled-components/macro';
import { PAGES } from '../../../constants';
export const Wrapper = styled.div<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE
      ? `
      section:nth-child(2){
        background-color:${theme.colors.light_secondary};
      }
      
  `
      : ``}
`;
export const Container = styled.section<{ page?: string }>`
  min-height: 480px;
  ${({ theme }) => `
        padding:${theme.padding * 10}rem ${theme.padding * 5}rem;
    `}
`;
export const Inner = styled.div<{ page?: string }>`
  margin: 0 auto;
`;
