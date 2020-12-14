import styled from 'styled-components/macro';
export const Container = styled.div`
  position: relative;
  z-index: 0;
`;
export const Inner = styled.div<{ horizontal?: boolean }>`
  ${({ theme, horizontal }) =>
    horizontal &&
    `
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-items: center;
  `};
`;
export const ButtonWrapper = styled.div<{ horizontal?: boolean }>`
  width: 100%;
  position: relative;
  z-index: 1;
  ${({ theme, horizontal }) =>
    horizontal &&
    `
        width:200px;
        margin-right:${theme.margin * 2}rem;
  `};
  border-radius: 0.4rem;
  overflow: hidden;
  ${({ theme }) =>
    `   border:2px solid ${theme.colors.primary};
        margin-bottom:${theme.margin * 2}rem;`};
  &:before {
    z-index: 0;
    cursor: pointer;
    position: absolute;
    display: flex;
    content: 'zobacz więcej';
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: all 0.3s ease-out;
    font-weight: 400;
    ${({ theme }) =>
      ` background-color:${theme.colors.dark_secondary};
        color:${theme.colors.light};
        `};
  }

  &:hover {
    ${({ theme }) => `border-color:${theme.colors.dark_secondary};`};
  }
  &:hover:before {
    transform: translateY(0%);
  }
`;
export const Button = styled.button<{ active: boolean }>`
  display: block;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  ${({ theme }) => `
    padding:${theme.padding}rem;
  `}
  ${({ theme, active }) =>
    active &&
    `
    background-color: ${theme.colors.primary};
    span {
      color:${theme.colors.light};
    }
  `}
`;
export const SeeMore = styled.span``;
export const AttributeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `margin-bottom:${theme.margin}rem;`}
`;
export const Name = styled.span`
  font-size: 2rem;

  ${({ theme }) =>
    `font-weight:${theme.bold_font};margin-right:${theme.margin * 2}rem`};
`;
export const Value = styled.span`
  font-size: 2rem;
  ${({ theme }) => `font-weight:${theme.bold_font}`}
`;
export const Model = styled.span`
  font-size: 1.8rem;
  ${({ theme }) => `color:${theme.colors.primary};`}
`;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h3 {
    margin: 0;
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 1;
    ${({ theme }) => `
      color:${theme.colors.dark};
      font-weight:${theme.bold_font};
    `}
  }
  span {
    display: none;
    visibility: hidden;
  }
  a {
    text-decoration: underline;
    font-weight: 400;
    text-transform: uppercase;
    display: block;
    ${({ theme }) => `
      color:${theme.colors.dark_secondary};
      font-weight:${theme.normal_font};
      margin-right:${theme.margin * 3}rem;
    `}
  }
`;
