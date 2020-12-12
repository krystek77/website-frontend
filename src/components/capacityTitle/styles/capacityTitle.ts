import styled from 'styled-components/macro';
export const Container = styled.div`
  padding: 1rem 1.5rem;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const AttributeWrapper = styled.div``;
export const Name = styled.span``;
export const Value = styled.span`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 3rem;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 1);
  ${({ theme }) => `
    background-color:${theme.colors.dark_secondary};
    color:${theme.colors.light};
    font-weight:${theme.bold_font};
  `}
`;
export const Title = styled.span`
  font-size: 1.8rem;
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;

  ${({ theme }) => `
    background-color:${theme.colors.primary};
    padding:${theme.padding * 3}rem ${theme.padding * 2}rem;
    padding-right: ${theme.padding * 4}rem;
    margin-right: -${theme.padding * 1}rem;
    color:${theme.colors.light};
    font-weight:${theme.bold_font};
  `}
`;
