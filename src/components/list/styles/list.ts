import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div``;
export const Inner = styled.div``;
export const Wrapper = styled.ul<{ menu: string }>`
  display: flex;

  ${({ menu, theme }) =>
    menu === 'vertical' &&
    `
    flex-direction:column;
    align-items:center;
  `};
`;
export const Item = styled.li<{ menu: string }>`
  ${({ menu, theme }) =>
    menu === 'vertical' &&
    `
    width:100%;
    text-align:left;
  `}
`;
export const Link = styled(ReactRouterLink)<{ menu: string }>`
  display: block;
  padding-top: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-bottom: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-left: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-right: ${({ theme }) => `${theme.padding * 2}rem`};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  position: relative;

  ${({ menu, theme }) =>
    menu === 'vertical' &&
    `
    padding: ${theme.padding * 2}rem;
    font-size:2rem;
    text-transform:capitalize;
  `}
`;
