import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BREAKPOINT } from '../../../constants';
export const Wrapper = styled.div<{
  filtered: boolean;
  category: string;
}>`
  position: relative;
  max-width: 480px;
  border-radius: 0.4rem;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
  &:after {
    position: absolute;
    display: none;
    opacity: 0.99;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.3s ease-out;
    ${({ theme }) => `background-color:${theme.colors.light}`};
  }

  ${({ filtered, category }) =>
    !filtered &&
    category !== '' &&
    `
    &:after {
      display:block;
    }
  `}

  ${({ theme }) => `
    margin-bottom: ${theme.margin * 5}rem;
  `}
  @media(min-width:${BREAKPOINT.LARGE}) {
    max-width: 260px;
  }
`;
export const Link = styled(ReactRouterLink)`
  display: block;
  cursor: pointer;
`;
export const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  ${({ theme }) => `
    background-color:${theme.colors.dark_secondary};
    color:${theme.colors.light};
    padding:${theme.padding * 1.5}rem;
  `}
  &:hover {
    ${({ theme }) => `
    font-weight:${theme.bold_font};
    background-color:${theme.colors.secondary};`}
  }
`;
export const Description = styled.p``;
export const Title = styled.h3`
  margin-bottom: 0;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  ${({ theme }) => `
    background-color:${theme.colors.primary};
    color:${theme.colors.light};
    padding:${theme.padding * 1}rem ${theme.padding * 3}rem;
    margin-bottom:${theme.margin * 0.2}rem;
  `}
`;
export const Frame = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  ${({ theme }) => `
    background-color:${theme.colors.dark};
  `}
  /* background: rgb(90, 89, 94);
  background: linear-gradient(
    135deg,
    rgba(90, 89, 94, 1) 50%,
    rgba(46, 46, 46, 1) 100%
  ); */
  background: rgb(90, 89, 94);
  background: radial-gradient(
    circle,
    rgba(90, 89, 94, 1) 50%,
    rgba(46, 46, 46, 1) 100%
  );
  &:before {
    content: '';
    display: block;
    position: absolute;
    opacity: 0.95;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: all 0.3s ease-out;
    ${({ theme }) => `
    background-color:${theme.colors.dark_secondary};
    color:${theme.colors.light};
  `};
  }
  &:hover:before {
    transform: translateY(0%);
  }
  &:hover div {
    transform: translateY(0%);
  }
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
    background-color:${theme.colors.medium};
    color:${theme.colors.light};
    padding:${theme.padding * 1}rem ${theme.padding * 3}rem;
    margin-top:${theme.margin * 0.2}rem;
  `}
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.9rem;
`;
export const Name = styled.span`
  ${({ theme }) => `
    font-weight:${theme.bold_font};
    font-weight:400;
    margin-bottom:${theme.margin * 0.5}rem;
     color:${theme.colors.dark_primary};
  `}
`;
export const Value = styled.span`
  font-size: 1.6rem;
  ${({ theme }) => `
    font-weight:${theme.bold_font};
    color:${theme.colors.dark};
  `}
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  ${({ theme }) => `
    color:${theme.colors.light};
    background-color:transparent;
    padding:${theme.padding * 3}rem ${theme.padding * 4}rem;
  `}
`;
