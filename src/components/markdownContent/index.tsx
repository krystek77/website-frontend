import React from 'react';
import styled from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';
const StyledMarkdownContent = styled(ReactMarkdown)`
  h3 {
    text-transform: uppercase;
    ${({ theme }) => ``};
  }
  p {
    ${({ theme }) => `margin-bottom:${theme.margin * 2}rem;`};
  }
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
export const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
  return <StyledMarkdownContent>{content}</StyledMarkdownContent>;
};
export default React.memo(MarkdownContent);
