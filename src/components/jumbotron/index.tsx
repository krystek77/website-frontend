import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  WrapperLink,
  Pane,
  Title,
  Description,
  Button,
  Label,
} from './styles/jumbotron';
interface IJumbotron {
  Pane: React.FC<{ background?: string }>;
  Title: React.FC;
  Description: React.FC<{ description: string | null }>;
  Button: React.FC<{
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
}

export const Jumbotron: React.FC<{
  title: string;
  ['aria-label']: string;
  ['aria-labelledby']: string;
  to: string;
}> &
  IJumbotron = ({ children, to, ...restProps }) => {
  return (
    <WrapperLink to={to} {...restProps}>
      {children}
    </WrapperLink>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Description = function JumbotronDescription({ ...restProps }) {
  const { description } = restProps;
  return description ? (
    <Description>
      <ReactMarkdown>{description}</ReactMarkdown>
    </Description>
  ) : null;
};
Jumbotron.Button = function JumbotronButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Jumbotron.Label = function JumbotronLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
export default Jumbotron;
