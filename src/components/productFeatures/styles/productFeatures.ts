import styled from 'styled-components/macro';
export const Container = styled.div`
  padding: 0.5rem 2rem;
`;
export const Inner = styled.div``;
export const Title = styled.h3`
  /* border: 1px solid gray; */
  ${({ theme }) => ``}
`;
export const List = styled.ul`
  /* border: 1px solid gray; */
  ${({ theme }) => ``}
`;
export const ListItem = styled.li`
  margin-bottom: 1rem;
  ${({ theme }) => `
  
  `}
`;
export const ListItemTitle = styled.div<{ active?: boolean }>`
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 2rem;
  cursor: pointer;

  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  ${({ theme }) => `
    background-color:${theme.colors.dark};
    color:${theme.colors.light};
  `}
  button {
    position: relative;
    border: none;
    outline: none;
    width: 24px;
    height: 24px;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    border-radius: 0.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-out;
    ${({ theme }) => `
        background-color:${theme.colors.light};
        color:${theme.colors.dark};
    `}
  }
  h4 {
    margin-bottom: 0;
    font-weight: 300;
    text-transform: capitalize;
    font-size: 1.6rem;
    ${({ theme }) => `
        color:${theme.colors.light};
    `}
  }
  &:hover {
    button {
      ${({ theme }) => `
        background-color:${theme.colors.dark_secondary};
        color:${theme.colors.light};
    `}
    }
    h4 {
      ${({ theme }) => `
        color:${theme.colors.medium};
    `}
    }
  }
  ${({ theme, active }) =>
    active &&
    `
    button {
        background-color:${theme.colors.primary};
        color:${theme.colors.light};
    }
     &:hover {
      button {
        background-color:${theme.colors.primary};
        color:${theme.colors.light};
      }
      h4 {
        color:${theme.colors.medium};
      }
    }
  `}
`;
export const ContentWrapper = styled.div<{ active?: boolean }>`
  display: block;
  overflow: hidden;
  max-height: 0px;
  visibility: hidden;
  transition: all 0.5s ease-out;
  ${({ theme }) => `
    background-color:${theme.colors.medium};
    border-bottom: 1px solid ${theme.colors.dark};
  `}
  ${({ theme, active }) =>
    active &&
    `
    visibility:visible;
    max-height:460px;
  `}
`;
export const Content = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  ${({ theme }) => ``}
  .image-container {
    flex-shrink: 0;
    border: 1px solid black;
    width: 300px;
    height: 200px;
    margin-right: 2rem;
    ${({ theme }) => ``}
  }
  .image-container__image {
    max-width: 100%;
    height: auto;
    display: block;
    ${({ theme }) => ``}
  }
  .text {
    /* border: 1px solid green; */
    ${({ theme }) => ``}
  }
`;
