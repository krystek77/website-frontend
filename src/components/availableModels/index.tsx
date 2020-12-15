import React from 'react';
import { IoMdDocument } from 'react-icons/io';
import {
  Container,
  Inner,
  ButtonWrapper,
  Button,
  SeeMore,
  AttributeWrapper,
  Name,
  Value,
  Model,
  Label,
  TitleWrapper,
} from './styles/availableModels';

interface IAvailableModels {
  ButtonWrapper: React.FC<{ horizontal?: boolean; onClick: () => void }>;
  Button: React.FC<{
    type: 'button';
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
    onClick?: () => void;
    active: boolean;
  }>;
  SeeMore: React.FC;
  AttributeWrapper: React.FC;
  Name: React.FC;
  Value: React.FC;
  Model: React.FC;
  TitleWrapper: React.FC<{ href: string }>;
  Label: React.FC<{ id: string }>;
}

export const AvailableModels: React.FC<{ horizontal?: boolean }> &
  IAvailableModels = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};
AvailableModels.ButtonWrapper = function AvailableModelsButtonWrapper({
  children,
  ...restProps
}) {
  return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
};
AvailableModels.Button = function AvailableModelsButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};

AvailableModels.SeeMore = function AvailableModelsSeeMore({
  children,
  ...restProps
}) {
  return <SeeMore {...restProps}>{children}</SeeMore>;
};
AvailableModels.AttributeWrapper = function AvailableModelsAttributeWrapper({
  children,
  ...restProps
}) {
  return <AttributeWrapper {...restProps}>{children}</AttributeWrapper>;
};
AvailableModels.Name = function AvailableModelsName({
  children,
  ...restProps
}) {
  return <Name {...restProps}>{children}</Name>;
};
AvailableModels.Value = function AvailableModelsValue({
  children,
  ...restProps
}) {
  return <Value {...restProps}>{children}</Value>;
};
AvailableModels.Model = function AvailableModelsModel({
  children,
  ...restProps
}) {
  return <Model>{children}</Model>;
};

AvailableModels.Label = function AvailableModelsLabel({
  children,
  ...restProps
}) {
  return <Label {...restProps}>{children}</Label>;
};

AvailableModels.TitleWrapper = function AvailableModelsTitleWrapper({
  href,
  ...restProps
}) {
  return (
    <TitleWrapper {...restProps}>
      <h3>Dostępne modele</h3>
      <span id='available_models'>Dostępne modele</span>
      <a
        href={`#${href}`}
        title='Dostępne modele'
        aria-label='Dostępne modele'
        aria-labelledby='available_models'
      >
        <IoMdDocument />
        <span>Specyfikacja</span>
      </a>
    </TitleWrapper>
  );
};

export default AvailableModels;
