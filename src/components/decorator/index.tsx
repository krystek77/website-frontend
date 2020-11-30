import React from 'react';
import { Container, Inner, Square } from './styles/decorator';
import { theme } from '../../theme';
import { randomNumber } from '../../utils';
const colors = [
  theme.colors.primary,
  theme.colors.light_primary,
  theme.colors.medium,
  'transparent',
];

export const Decorator: React.FC<{
  pattern?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}> = ({
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto',
  pattern = '111111111',
}) => {
  return (
    <Container top={top} left={left} bottom={bottom} right={right}>
      <Inner>
        {Array.from({ length: 9 }).map((item, index) => {
          const tmp = pattern.split('');

          return tmp[index] === '1' ? (
            <Square
              key={index}
              bgColor={colors[randomNumber(0, colors.length - 1)]}
            />
          ) : null;
        })}
      </Inner>
    </Container>
  );
};

export default Decorator;
