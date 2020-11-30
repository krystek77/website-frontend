import React from 'react';
import {
  Container,
  Inner,
  Wrapper,
  Slide,
  Panel,
  Description,
  List,
  ControlPanel,
  ControlButton,
  Title,
  ActionLinkButton,
  Label,
} from './styles/slider';

interface ISlider {
  Wrapper: React.FC;
  Slide: React.FC<{ direction: string }>;
  Panel: React.FC<{ backgroundImg?: string }>;
  List: React.FC<{ list?: Array<{ id: string; text: string }> }>;
  Description: React.FC<{ description: string }>;
  ControlPanel: React.FC;
  ControlButton: React.FC<{
    active: boolean;
    type: 'button';
    img: string;
    onClick: () => void;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Title: React.FC;
  ActionLinkButton: React.FC<{
    to: string;
    title: string;
    ['aria-label']: string;
    ['aria-labelledby']: string;
  }>;
  Label: React.FC<{ id: string }>;
}

export const Slider: React.FC & ISlider = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};
Slider.Wrapper = function SliderWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};
Slider.Slide = function SliderSlide({ children, ...restProps }) {
  return <Slide {...restProps}>{children}</Slide>;
};
Slider.Panel = function SliderPanel({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>;
};
Slider.Description = function SliderDescription({ children, ...restProps }) {
  const { description } = restProps;
  return description ? (
    <Description {...restProps}>{children}</Description>
  ) : null;
};
Slider.List = function SliderList({ ...restProps }) {
  const { list } = restProps;
  return list && list.length > 0 ? (
    <List>
      {list.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </List>
  ) : null;
};
Slider.ControlPanel = function SliderControlPanel({ children }) {
  return <ControlPanel>{children}</ControlPanel>;
};
Slider.ControlButton = function SliderControlButton({ ...restProps }) {
  return <ControlButton {...restProps} />;
};
Slider.Title = function SliderTitle({ children }) {
  return <Title>{children}</Title>;
};
Slider.ActionLinkButton = function SliderActionLinkButton({
  children,
  ...restProps
}) {
  const { to } = restProps;
  return <ActionLinkButton to={to}>{children}</ActionLinkButton>;
};
Slider.Label = function SliderLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

export default Slider;
