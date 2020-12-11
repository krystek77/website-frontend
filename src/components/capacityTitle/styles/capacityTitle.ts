import styled from 'styled-components/macro';
export const Container = styled.div``;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => `margin-bottom:${theme.margin * 6}rem;`}
`;
export const AttributeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) => ``}
`;
export const Name = styled.span`
  text-transform: capitalize;
  font-size: 2.2rem;
  font-weight: 500;
  ${({ theme }) =>
    `margin-right:${theme.margin * 1}rem;
     color:${theme.colors.primary};`}
`;
export const Value = styled.span`
  position: relative;
  font-weight: 700;

  border-radius: 50%;
  font-size: 3rem;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) =>
    `margin-right:${theme.margin * 2}rem;
    background-color: ${theme.colors.dark_secondary};
     color:${theme.colors.light};`}
  &:before {
    position: absolute;
    z-index: -1;
    display: block;
    content: '';
    width: 120px;
    height: 120px;
    top: -10px;
    left: -10px;
    border-radius: 50%;
    ${({ theme }) =>
      `border:1px solid ${theme.colors.dark_secondary};
     `}
  }
`;
export const Title = styled.span`
  font-size: 2.2rem;
  white-space: nowrap;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0.8rem;
  position: relative;
  z-index: -1;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  ${({ theme }) => `
   color:${theme.colors.light};
   background-color:${theme.colors.primary};
   margin-left: -${theme.margin * 4}rem;
   padding-left:${theme.padding * 4}rem;
  `};
`;
