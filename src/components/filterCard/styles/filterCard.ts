import styled from 'styled-components/macro';
import { BREAKPOINT } from '../../../constants';
export const Container = styled.div``;
export const Inner = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: ${BREAKPOINT.LARGE}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  ${({ theme }) => `
    padding-bottom:${theme.padding * 10}rem;
  `};
`;
export const RadioInput = styled.input`
  display: none;
`;
export const LabelInput = styled.label<{ active: boolean }>`
  border-radius: 0.4rem;
  ${({ theme }) => `
    padding:${theme.padding * 1}rem ${theme.padding * 2}rem;
    color:${theme.colors.dark};
  `};

  font-size: 1.6rem;
  margin-right: 0.5rem;
  /* font-weight: 600; */
  cursor: pointer;
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

  ${({ theme }) => `
    background-color:transparent;
    padding:${theme.padding * 1}rem;
    color:${theme.colors.light};
  `};

  font-size: 1.6rem;
  margin-right: 0.5rem;
  /* font-weight: 600; */
  cursor: pointer;
  ${({ theme, active }) =>
    active &&
    ` background-color:${theme.colors.light};
      font-weight:${theme.bold_font}`};
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => `${theme.margin * 2}rem`};
  @media (min-width: ${BREAKPOINT.LARGE}) {
    margin-bottom: 0;
  }
`;
export const Legend = styled.span`
  width: 100%;
  /* font-family: 'Fira Code', sans-serif; */
  font-weight: 600;
  font-size: 1.4rem;
  /* margin-left: 1.5rem; */
  margin-bottom: 2rem;
  text-transform: uppercase;
  /* text-decoration: underline; */
`;
