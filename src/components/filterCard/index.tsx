import React from 'react';
import {
  Container,
  Inner,
  GroupInput,
  RadioInput,
  LabelInput,
  Legend,
} from './styles/filterCard';

interface IFliteredCard {
  GroupInput: React.FC;
  RadioInput: React.FC<{
    type: 'radio';
    value: string;
    id: string;
    name: string;
    checked: boolean;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  }>;
  LabelInput: React.FC<{ htmlFor: string; active: boolean }>;
  Legend: React.FC;
}

export const FliterCard: React.FC & IFliteredCard = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
FliterCard.GroupInput = function FliterCardGroupInput({
  children,
  ...restProps
}) {
  return <GroupInput {...restProps}>{children}</GroupInput>;
};
FliterCard.RadioInput = function FliterCardRadioInput({ ...restProps }) {
  return <RadioInput {...restProps} />;
};
FliterCard.LabelInput = function FliterCardLabelInput({
  children,
  ...restProps
}) {
  return <LabelInput {...restProps}>{children}</LabelInput>;
};
FliterCard.Legend = function FliterCardLegend({ children, ...restProps }) {
  return <Legend {...restProps}>{children}</Legend>;
};

export default FliterCard;
