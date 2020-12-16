import styled from 'styled-components/macro';
import { BREAKPOINT } from '../../../constants';
export const Container = styled.div`
  ${({ theme }) => `
    padding:${theme.padding * 10}rem ${theme.padding * 5}rem;
  `}
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: ${BREAKPOINT.SMALL}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  ${({ theme }) => `
    
  `};
`;
export const RadioInput = styled.input`
  display: none;
`;
export const LabelInput = styled.label<{ active: boolean }>`
  border-radius: 0.4rem;
  font-size: 1.6rem;
  margin-right: 0.5rem;
  cursor: pointer;
  ${({ theme }) => `
    padding:${theme.padding * 2}rem ${theme.padding * 2}rem;
    background-color:${theme.colors.medium};
    color:${theme.colors.dark};
    font-weight:${theme.bold_font};
  `};
  ${({ theme, active }) =>
    active &&
    `   background-color:${theme.colors.light};
        color:${theme.colors.dark_primary};
        font-weight:${theme.bold_font}`}
`;
export const Clear = styled.button<{ active: boolean }>`
  border-radius: 0.4rem;
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  font-size: 1.6rem;
  margin-right: 0.5rem;
  cursor: pointer;
  ${({ theme }) => `
    background-color:${theme.colors.medium};
    padding:${theme.padding * 2}rem;
    color:${theme.colors.dark};
  `};
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => `${theme.margin * 2}rem`};
`;
export const Legend = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
