import React from 'react';
import {
  Container,
  Inner,
  AttributeWrapper,
  Name,
  Value,
  Title,
} from './styles/capacityTitle';

interface ICapacityTitle {
  AttributeWrapper: React.FC;
  Name: React.FC;
  Value: React.FC;
  Title: React.FC;
}
export const CapacityTitle: React.FC & ICapacityTitle = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};

CapacityTitle.AttributeWrapper = function CapacityTitleAttributeWrapper({
  children,
  ...restProps
}) {
  return <AttributeWrapper {...restProps}>{children}</AttributeWrapper>;
};
CapacityTitle.Name = function CapacityTitleName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
CapacityTitle.Value = function CapacityTitleValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};
CapacityTitle.Title = function CapacityTitleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default CapacityTitle;
