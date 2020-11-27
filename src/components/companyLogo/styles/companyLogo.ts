import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { LOGO } from '../../../constants';
export const Container = styled.div<{ logo?: string; toggleSidebar: boolean }>`
  ${({ logo, theme }) =>
    logo === LOGO.SIDEBAR &&
    `
     margin-bottom: ${theme.margin * 6}rem;
  `};
  ${({ logo, toggleSidebar, theme }) =>
    logo === LOGO.TOPBAR &&
    toggleSidebar &&
    `
     display:none;
  `};
`;
export const Inner = styled.div<{ logo?: string; toggleSidebar: boolean }>``;
export const Logo = styled(ReactRouterLink)<{ logo?: string }>`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  ${({ logo, theme }) =>
    logo === LOGO.SIDEBAR &&
    `
      font-weight:${theme.bold_font};
      font-size:3rem;
      color: ${theme.colors.dark};
  `};
  &:hover {
    color: ${({ theme }) => theme.colors.dark_primary};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.light};
  }
  &:active {
    color: ${({ theme }) => theme.colors.dark_primary};
  }
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
