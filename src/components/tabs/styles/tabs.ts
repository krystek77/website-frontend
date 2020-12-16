import styled from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';
export const Container = styled.div`
  width: 100%;
  ${({ theme }) => `
    padding:0rem ${theme.padding * 5}rem;
  `};
`;
export const Inner = styled.div`
  ${({ theme }) => ``};
`;
export const TabLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => ``};
`;
export const TabLink = styled.li<{ active: boolean }>`
  padding: 1rem 2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-right: 1px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  position: relative;
  z-index: 0;
  white-space: nowrap;
  font-weight: 400;
  ${({ theme }) => `
    background-color:${theme.colors.light};
    border: 1px solid ${theme.colors.medium};
    border-bottom:none;
    color:${theme.colors.dark};
    &:hover {
        background-color: ${theme.colors.dark_secondary};
        border: 1px solid ${theme.colors.secondary};
        border-bottom:none;
        color: ${theme.colors.light};
    }
  `};
  ${({ theme, active }) =>
    active &&
    `
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.dark_primary};
        border-bottom:none;
        color: ${theme.colors.light};
        z-index:1;
        box-shadow:2px 0px 4px -1px rgba(0,0,0,0.6);
        
        
  `}
`;

export const TabContentWrapper = styled.ul`
  ${({ theme }) => `
    border-top: 1px solid ${theme.colors.medium};
  `};
`;
export const TabContent = styled.li`
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  ${({ theme }) => `
  
  `};
`;
export const ReactMarkdownContent = styled(ReactMarkdown)`
  ul {
    list-style-type: none;
    ${({ theme }) => `
        margin-bottom: ${theme.margin * 4}rem;
      `}
    & > li {
      position: relative;
      ${({ theme }) => `
          padding-bottom: ${theme.padding * 0.5}rem;
          padding-top: ${theme.padding * 0.5}rem;
          padding-left: ${theme.padding * 4}rem;
        `}
      &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        ${({ theme }) => `
            background-color: ${theme.colors.secondary};
          `}
      }
    }
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  line-height: 1;
  ${({ theme }) => `
    margin-top:${theme.margin * 6}rem;
    margin-bottom:${theme.margin * 6}rem;
  `}
  .title {
    ${({ theme }) => `
      color:${theme.colors.dark};
    `};
  }
  .wrapper {
  }
`;
