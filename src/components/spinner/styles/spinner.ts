import styled from 'styled-components/macro';
export const Container = styled.div`
  width: 100%;
`;
export const Inner = styled.div`
  max-width: 320px;
  margin: 0 auto;
  font-size: 2rem;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  ${({ theme }) => `
    color:${theme.colors.warnning};
    font-weight:${theme.normal_font};
    padding:${theme.padding * 3}rem;
  `}
`;
