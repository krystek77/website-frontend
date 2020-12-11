import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components/macro';

const StyledParagraph = styled.p<{ light?: boolean; page?: string }>`
  font-size: 1.6rem;
  font-weight: 300;
  white-space: normal;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 auto;
  ${({ theme, light }) => `
    margin-bottom:${theme.margin * 3.2}rem;
    color:${theme.colors.dark};
    ${light && `color:${theme.colors.medium};`}
  `}
`;

const StyledMarkdownParagraph = styled(ReactMarkdown)<{
  light?: boolean;
  page?: string;
}>`
  font-size: 1.6rem;
  font-weight: 300;
  white-space: normal;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 auto;
  ${({ theme, light }) => `
    margin-bottom:${theme.margin * 3.2}rem;
    color:${theme.colors.dark};
    ${light && `color:${theme.colors.medium};`}
  `}
`;

export const Paragraph: React.FC<{ light?: boolean; page?: string }> = ({
  children,
  ...restProps
}) => {
  return <StyledParagraph {...restProps}>{children}</StyledParagraph>;
};

export const MarkdownParagraph: React.FC<{
  text: string | undefined;
  page?: string;
}> = ({ text, ...restProps }) => {
  return (
    <StyledMarkdownParagraph {...restProps}>{text}</StyledMarkdownParagraph>
  );
};

export default Paragraph;
