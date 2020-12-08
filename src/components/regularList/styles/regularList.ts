import styled from 'styled-components/macro';
export const Container = styled.div``;
export const Inner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
export const List = styled.ul`
  ${({ theme }) => `
    margin-bottom:${theme.margin * 6}rem;
  `}
`;
export const Item = styled.li`
  padding-left: ${({ theme }) => `${theme.margin * 6}rem`};
  font-family: 'Lato';
  font-size: 2rem;
  position: relative;
  margin-bottom: ${({ theme }) => `${theme.margin * 2}rem`};
  white-space: nowrap;
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
`;
