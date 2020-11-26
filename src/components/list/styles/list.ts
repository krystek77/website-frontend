import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MENU } from '../../../constants';
export const Container = styled.div``;
export const Inner = styled.div``;
export const Wrapper = styled.ul<{ menu: string }>`
  display: flex;
  width: max-content;

  ${({ menu, theme }) =>
    (menu === MENU.MENU_V ||
      menu === MENU.MENU_SOCIAL_V ||
      menu === MENU.MENU_USER_V) &&
    `
    flex-direction:column;
    align-items:center;
  `};
`;
export const Item = styled.li<{ menu: string }>`
  ${({ menu, theme }) =>
    (menu === MENU.MENU_V ||
      menu === MENU.MENU_SOCIAL_V ||
      menu === MENU.MENU_USER_V) &&
    `
    width:100%;
    text-align:left;
  `}
`;
export const Link = styled(ReactRouterLink)<{
  menu: string;
  title: string;
}>`
  display: block;
  padding-top: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-bottom: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-left: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-right: ${({ theme }) => `${theme.padding * 2}rem`};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  position: relative;

  ${({ menu, theme }) =>
    (menu === MENU.MENU_V ||
      menu === MENU.MENU_SOCIAL_V ||
      menu === MENU.MENU_USER_V) &&
    `
    padding: ${theme.padding * 2}rem;
    font-size:2rem;
    text-transform:capitalize;
  `};
  ${({ title, theme }) =>
    title === 'Facebook'
      ? `color:#3b5998 `
      : title === 'Youtube'
      ? `color:#bb0000`
      : title === 'Instagram'
      ? `color:#f46f30`
      : title === 'Twitter'
      ? `color:#00aced`
      : `color:${theme.colors.dark}`};
  ${({ menu, theme }) =>
    (menu === MENU.MENU_SOCIAL_H || menu === MENU.MENU_SOCIAL_V) &&
    `
      font-size:3rem;
    `}
`;

export const RegularLink = styled.a<{
  menu: string;
  title: string;
}>`
  display: block;
  padding-top: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-bottom: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-left: ${({ theme }) => `${theme.padding * 2}rem`};
  padding-right: ${({ theme }) => `${theme.padding * 2}rem`};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  position: relative;

  ${({ menu, theme }) =>
    (menu === MENU.MENU_V ||
      menu === MENU.MENU_SOCIAL_V ||
      menu === MENU.MENU_USER_V) &&
    `
    padding: ${theme.padding * 2}rem;
    font-size:2rem;
    text-transform:capitalize;
  `};
  ${({ title, theme }) =>
    title === 'Facebook'
      ? `color:#3b5998 `
      : title === 'Youtube'
      ? `color:#bb0000`
      : title === 'Instagram'
      ? `color:#f46f30`
      : title === 'Twitter'
      ? `color:#00aced`
      : `color:${theme.colors.dark}`};
  ${({ menu, theme }) =>
    (menu === MENU.MENU_SOCIAL_H || menu === MENU.MENU_SOCIAL_V) &&
    `
      font-size:3rem;
    `}
`;

export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
