import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BREAKPOINT } from '../../../constants';
export const Container = styled.div`
  padding-top: ${({ theme }) => `${theme.padding}rem`};
  padding-bottom: ${({ theme }) => `${theme.padding}rem`};
  padding-left: ${({ theme }) => `${theme.padding * 2.5}rem`};
  padding-right: ${({ theme }) => `${theme.padding * 2.5}rem`};
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  max-height: 45px;
  overflow: hidden;
  z-index: 1;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;
export const Logo = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;

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
export const Navigation = styled.nav`
  display: none;
  @media (min-width: ${BREAKPOINT.LARGE}) {
    display: flex;
  }
`;
export const Hamburger = styled.button`
  font-size: 3rem;
  display: block;
  padding: 0;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 400;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: auto;
  &:hover {
    color: ${({ theme }) => theme.colors.dark_primary};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.dark_primary};
  }
  &:active {
    color: ${({ theme }) => theme.colors.dark_primary};
  }
  @media (min-width: ${BREAKPOINT.LARGE}) {
    display: none;
  }
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
