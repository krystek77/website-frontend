import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BREAKPOINT } from '../../../constants';
export const Container = styled.section`
  background-color: #161616;
  width: 100%;
`;
export const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
export const WrapperLink = styled(ReactRouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINT.LARGE}) {
    &:nth-of-type(odd) {
      flex-direction: row;
    }
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
`;
export const Pane = styled.div<{ background?: string }>`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${({ theme }) => `
    padding:${theme.padding * 6}rem ${theme.padding * 8}rem;
  `}
  ${({ background }) =>
    background &&
    `
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
  `}
  @media (min-width: ${BREAKPOINT.LARGE}) {
    width: 50%;
  }
`;
export const Title = styled.h2`
  width: 100%;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;

  ${({ theme }) => `
    color:${theme.colors.light_secondary};
    margin-bottom: ${theme.margin * 4}rem;
  `}
`;
export const Description = styled.div`
  p {
    font-size: 1.8rem;
    text-decoration: none;
    white-space: normal;
    ${({ theme }) => `
    color:${theme.colors.medium};
    margin-bottom:${theme.margin * 10}rem;
  `}
  }
`;
export const Button = styled.button`
  display: block;
  font-family: 'Open sans';
  font-size: 1.3rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  ${({ theme }) => `
    border: 1px solid ${theme.colors.light_secondary};
    color:${theme.colors.light_secondary};
    font-weight:${theme.normal_font};
    padding:${theme.padding * 2}rem ${theme.padding * 2}rem;
    &:hover {
      background-color:${theme.colors.secondary};
      color:${theme.colors.light};
    }
    &:focus {
      background-color:${theme.colors.light};
      color:${theme.colors.dark_primary};
      border:1px solid ${theme.colors.light};
    }
    &:active {
      background-color:${theme.colors.light};
      color:${theme.colors.dark_primary};
      border:1px solid ${theme.colors.light};
    }
  `}
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
