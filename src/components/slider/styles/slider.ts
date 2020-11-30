import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BREAKPOINT } from '../../../constants';
export const Container = styled.div`
  margin-top: 45px;
  position: relative;
`;
export const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Wrapper = styled.ul``;
export const Slide = styled.li<{ direction: string }>`
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:last-child {
    display: none;
  }

  @media (min-width: ${BREAKPOINT.LARGE}) {
    div:last-child {
      display: flex;
    }
    ${({ direction, theme }) => `
    flex-direction: ${direction};
    ${
      direction === 'row'
        ? `div:first-child {align-items:flex-start};div:last-child {align-items:flex-start}`
        : `div:first-child {align-items:flex-start};div:last-child {align-items:flex-end}`
    }
  `};
  }
`;
export const Panel = styled.div<{ backgroundImg?: string }>`
  position: relative;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
      padding:${theme.padding * 10}rem;
    `}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ backgroundImg, theme }) => `
    ${
      backgroundImg === ''
        ? `background-color:${theme.colors.dark};color:${theme.colors.light};`
        : `background-image: url(../assets/images/${backgroundImg}.webP);color:${theme.colors.dark};`
    };
  `}
  @media (min-width: ${BREAKPOINT.LARGE}) {
    flex-grow: 1;
    height: 100%;
    ${({ theme }) => `
      padding:${theme.padding * 6}rem ${theme.padding * 20}rem;
    `}
  }
`;
export const Description = styled.p`
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => `${theme.margin * 6}rem`};
  @media (min-width: ${BREAKPOINT.LARGE}) {
    max-width: 640px;
    font-size: 2.4rem;
    line-height: 1.3;
  }
`;
export const Title = styled.span`
  font-size: 4rem;
  font-family: 'Lato';
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => `${theme.margin * 6}rem`};
  font-weight: ${({ theme }) => theme.bold_font};
  color: ${({ theme }) => theme.colors.dark};
  @media (min-width: ${BREAKPOINT.LARGE}) {
    max-width: 450px;
  }
`;
export const ActionLinkButton = styled(ReactRouterLink)`
  position: relative;
  z-index: 10;
  display: block;
  width: max-content;
  font-family: 'Open sans';
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  outline: none;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 1);
  @media (min-width: ${BREAKPOINT.LARGE}) {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }

  ${({ theme }) => `
    background-color:${theme.colors.dark_secondary};
    color:${theme.colors.light};
    font-weight:${theme.normal_font};
    padding:${theme.padding * 3}rem ${theme.padding * 4}rem;
    &:hover {
      background-color:${theme.colors.secondary};
      color:${theme.colors.light};
    }
    &:focus {
      background-color:${theme.colors.light};
      color:${theme.colors.dark_primary};
    }
    &:active {
      background-color:${theme.colors.light};
      color:${theme.colors.dark_primary};
    }
  `}
  @media (min-width: ${BREAKPOINT.LARGE}) {
    margin-left: auto;
    margin-right: ${({ theme }) => `${theme.margin * 6}rem`};
  }
`;
export const ControlPanel = styled.div`
  position: absolute;
  padding-top: 0.5rem;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT.LARGE}) {
    justify-content: flex-end;
    padding-right: ${({ theme }) => `${theme.margin * 6}rem`};
  }
`;
export const ControlButton = styled.button<{ img?: string; active: boolean }>`
  font-size: 1.4rem;
  text-transform: lowercase;
  outline: none;
  border: none;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  cursor: pointer;
  ${({ theme, active }) => `
    padding:${theme.padding * 2}rem ${theme.padding * 3}rem;
    margin-right:${theme.margin * 1}rem;
    margin-bottom:${theme.margin * 2}rem;
    background-color: ${theme.colors.medium};
    transition: ${theme.transition};
    &:hover {
      transform:scaleY(1.2);
        transform-origin:bottom;
        background-color: ${theme.colors.light};
        color:${theme.colors.dark_primary};
    }
    ${
      active &&
      `transform:scaleY(1.2);
        transform-origin:bottom;
        background-color: ${theme.colors.light};
        color:${theme.colors.dark_primary};
      `
    };
    &:focus {
      transform:scaleY(1.2);
        transform-origin:bottom;
        background-color: ${theme.colors.light};
        color:${theme.colors.dark_primary};
    }

  `};
  @media (min-width: ${BREAKPOINT.LARGE}) {
    margin-bottom: 0;
  }
`;
export const List = styled.ul`
  margin-bottom: ${({ theme }) => `${theme.margin * 6}rem`};
  align-self: flex-start;
  li {
    padding-left: ${({ theme }) => `${theme.margin * 6}rem`};
    font-family: 'Lato';
    font-size: 2.2rem;
    position: relative;
    margin-bottom: ${({ theme }) => `${theme.margin * 2}rem`};
    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background-color: ${({ theme }) => theme.colors.dark_secondary};
      display: block;
      content: '';
    }
  }
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
