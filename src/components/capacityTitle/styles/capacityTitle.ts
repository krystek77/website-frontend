import styled from 'styled-components/macro';
export const Container = styled.div``;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => `margin-bottom:${theme.margin * 2}rem;`}
`;
export const AttributeWrapper = styled.div`
  ${({ theme }) => ``}
`;
export const Name = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: capitalize;
  ${({ theme }) =>
    `margin-right:${theme.margin * 1}rem;
     color:${theme.colors.primary};`}
`;
export const Value = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: capitalize;
  ${({ theme }) =>
    `margin-right:${theme.margin * 2}rem;
     color:${theme.colors.primary};`}
`;
export const Title = styled.span`
  font-size: 2.2rem;
  white-space: nowrap;
  font-weight: 500;
  text-transform: capitalize;
  ${({ theme }) => `
  color:${theme.colors.primary};

  `};
`;
