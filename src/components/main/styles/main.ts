import styled from 'styled-components/macro';
export const Container = styled.main`
  ${({ theme }) => `
    padding: ${theme.padding * 3}rem ${theme.padding * 4}rem;
  `}
`;
export const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;
