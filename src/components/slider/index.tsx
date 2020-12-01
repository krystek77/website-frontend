import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  Inner,
  Wrapper,
  Slide,
  Panel,
  Description,
  List,
  Image,
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
  List: React.FC<{ list?: Array<{ id: number; text: string }> }>;
  Description: React.FC<{ description: string | null }>;
  Image: React.FC<{
    contentImage: { url: string; alternativeText?: string };
  }>;
  ControlPanel: React.FC;
  ControlButton: React.FC<{
    active: boolean;
    type: 'button';
    img?: string;
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
Slider.Description = function SliderDescription({ ...restProps }) {
  const { description } = restProps;
  return description ? (
    <Description {...restProps}>
      <ReactMarkdown>{description}</ReactMarkdown>
    </Description>
  ) : null;
};
Slider.List = function SliderList({ ...restProps }) {
  const { list } = restProps;
  return list && list.length > 0 ? (
    <List>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <ReactMarkdown>{item.text}</ReactMarkdown>
          </li>
        );
      })}
    </List>
  ) : null;
};
Slider.ControlPanel = function SliderControlPanel({ children }) {
  return <ControlPanel>{children}</ControlPanel>;
};
Slider.ControlButton = function SliderControlButton({
  children,
  ...restProps
}) {
  return <ControlButton {...restProps}>{children}</ControlButton>;
};
Slider.Title = function SliderTitle({ children }) {
  return <Title>{children}</Title>;
};
Slider.Image = function SliderImage({ children, ...restProps }) {
  const { contentImage } = restProps;
  return contentImage ? (
    <Image>
      <img src={contentImage.url} alt={contentImage.alternativeText} />
    </Image>
  ) : null;
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
