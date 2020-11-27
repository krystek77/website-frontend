import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div``;
export const Inner = styled.div``;
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
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
