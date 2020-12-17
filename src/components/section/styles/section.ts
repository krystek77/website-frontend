import styled from 'styled-components/macro';
import { PAGES, BREAKPOINT } from '../../../constants';
export const Wrapper = styled.div<{ page?: string }>`
  ${({ theme, page }) =>
    page === PAGES.BUSINESS_DETAILS_PAGE &&
    `
      section:nth-child(2){
        // background-color:${theme.colors.light_secondary};
        &>div:first-child {
          max-width:1170px;
          display:grid;
          grid-template-columns:auto;
          @media(min-width:${BREAKPOINT.MEDIUM}){
            grid-template-columns:repeat(2,1fr);
          }
          @media(min-width:${BREAKPOINT.LARGE}){
            grid-template-columns:repeat(3,1fr);
          }
          grid-template-rows:auto;
          grid-gap:2rem;
          
        }
      }
      section:nth-child(6){
        & >div:first-child {
          
          @media(min-width:${BREAKPOINT.LARGE}){
            display:grid;
            grid-template-columns: repeat(4,1fr);
            grid-template-rows:auto;
            justify-items:start;
            align-items:center;
        }
        }
      }
      
  `}
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
