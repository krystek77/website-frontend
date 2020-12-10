import React from 'react';
import { GrPowerReset } from 'react-icons/gr';
import {
  Container,
  Inner,
  GroupInput,
  RadioInput,
  LabelInput,
  Clear,
  Legend,
} from './styles/filterCard';

interface IFilterCardCard {
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
  Clear: React.FC<{ type: 'button'; onClick: () => void; active: boolean }>;
}

export const FilterCard: React.FC & IFilterCardCard = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
FilterCard.GroupInput = function FilterCardGroupInput({
  children,
  ...restProps
}) {
  return <GroupInput {...restProps}>{children}</GroupInput>;
};
FilterCard.RadioInput = function FilterCardRadioInput({ ...restProps }) {
  return <RadioInput {...restProps} />;
};
FilterCard.LabelInput = function FilterCardLabelInput({
  children,
  ...restProps
}) {
  return <LabelInput {...restProps}>{children}</LabelInput>;
};
FilterCard.Legend = function FilterCardLegend({ children, ...restProps }) {
  return <Legend {...restProps}>{children}</Legend>;
};
FilterCard.Clear = function FilterCardClear({ ...restProps }) {
  return (
    <Clear {...restProps}>
      <GrPowerReset />
    </Clear>
  );
};

export default FilterCard;
