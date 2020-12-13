import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
// import { PAGES } from '../../../constants';
export const Container = styled.div<{ page?: string }>`
  background-color: black;
  ${({ theme }) => `
    padding:${theme.padding * 8}rem ${theme.padding * 5}rem;
    color:${theme.colors.light};
  `}
`;
export const Inner = styled.div<{ page?: string }>`
  max-width: 1170px;
  margin: 0 auto;
`;
export const Title = styled.h2<{ page?: string }>`
  ${({ theme }) => `
    margin-bottom:${theme.padding * 0}rem;
  `}
`;
export const SubTitle = styled.p<{ page?: string }>`
  line-height: 1.3;
  font-size: 2rem;
  ${({ theme }) => `
    margin-top:${theme.padding * 1}rem;
  `}
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
export const Link = styled(ReactRouterLink)`
  text-decoration: underline;
  font-weight: 400;
  text-transform: uppercase;
  display: block;
  ${({ theme }) => `
    margin-top:${theme.padding * 1}rem;
    color:${theme.colors.secondary};
  `}
`;
