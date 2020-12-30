import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div``;
export const Inner = styled.div`
  ${({ theme }) => `
   padding-bottom:${theme.padding * 2}rem;
  `};
`;
export const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  ${({ theme }) => `
   margin-right:${theme.padding * 2}rem;
  `};
`;
export const Value = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  ${({ theme }) => `
   color:${theme.colors.primary};
  `};
`;
export const Link = styled(ReactRouterLink)`
  ${({ theme }) => `
    padding-right:${theme.margin}rem;
    padding-left:${theme.margin}rem;
    border-right:1px solid ${theme.colors.secondary};
    &:last-child {
      border-right:none;
    }
    color:${theme.colors.dark_secondary};
    font-weight:400;
    `};
`;
