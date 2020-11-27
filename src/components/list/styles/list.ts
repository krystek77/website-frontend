import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MENU } from '../../../constants';
export const Container = styled.div`
  width: 100%;
`;
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
    margin-bottom:${theme.margin * 6}rem;
  `};
  ${({ menu }) =>
    menu === MENU.MENU_V &&
    `
    width:100%;
  `}
  ${({ menu, theme }) =>
    (menu === MENU.MENU_USER_H || menu === MENU.MENU_SOCIAL_H) &&
    `
    margin:0 auto;
  `}
  ${({ menu, theme }) =>
    menu === MENU.MENU_SOCIAL_H &&
    `
    border-top:1px solid ${theme.colors.medium};
    padding-top: ${theme.padding * 5}rem;
  `}
`;

export const Item = styled.li<{ menu: string }>`
  ${({ menu, theme }) =>
    menu === MENU.MENU_H &&
    `
    border-right: 1px solid ${theme.colors.light_primary};
  `}
  ${({ menu, theme }) =>
    menu === MENU.MENU_V &&
    `
    background-color: ${theme.colors.primary};
    margin-bottom: 1px;
  `}

  ${({ menu, theme }) =>
    (menu === MENU.MENU_V ||
      menu === MENU.MENU_SOCIAL_V ||
      menu === MENU.MENU_USER_V) &&
    `
    width:100%;
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
  color: ${({ theme }) => theme.colors.light};
  font-weight: 400;
  position: relative;

  ${({ menu, theme }) =>
    menu === MENU.MENU_V &&
    `
      border-bottom:1px solid ${theme.colors.dark_primary};
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.dark_primary};
    ${({ menu, theme }) =>
      menu === MENU.MENU_H &&
      `
      border-radius:0.4rem;
    `}
  }
  &:focus {
    color: ${({ theme }) => theme.colors.dark_primary};
    ${({ menu, theme }) =>
      menu === MENU.MENU_H &&
      `
      background-color ${theme.colors.light};
      border-radius:0.4rem;
    `}
    ${({ menu, theme }) =>
      menu === MENU.MENU_V &&
      `
      background-color ${theme.colors.light};
      border-radius:none;
    `}
  }
  &:active {
    color: ${({ theme }) => theme.colors.dark_primary};
    ${({ menu, theme }) =>
      menu === MENU.MENU_H &&
      `
      background-color ${theme.colors.light};
      border-radius:0.4rem;
    `}
    ${({ menu, theme }) =>
      menu === MENU.MENU_V &&
      `
      background-color ${theme.colors.light};
      border-radius:none;
    `}
  }

  ${({ menu, theme }) =>
    (menu === MENU.MENU_SOCIAL_V || menu === MENU.MENU_USER_V) &&
    `
    padding: ${theme.padding * 2}rem;
    font-size:2rem;
    text-transform:capitalize;
    color: ${theme.colors.dark};
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
      : ``};
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
