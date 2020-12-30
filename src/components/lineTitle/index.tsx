import React from 'react';
import {
  Container,
  Inner,
  AttributeWrapper,
  Line,
  Title,
} from './styles/lineTitle';

interface ICapacityTitle {
  AttributeWrapper: React.FC;
  Line: React.FC;
  Title: React.FC;
}
export const LineTitle: React.FC & ICapacityTitle = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

LineTitle.AttributeWrapper = function LineTitleAttributeWrapper({
  children,
  ...restProps
}) {
  return <AttributeWrapper {...restProps}>{children}</AttributeWrapper>;
};
LineTitle.Line = function LineTitleLine({ children, ...restProps }) {
  return <Line {...restProps}>{children}</Line>;
};
LineTitle.Title = function LineTitleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default LineTitle;
