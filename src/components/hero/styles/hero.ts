import styled from 'styled-components/macro';
export const Wrapper = styled.header`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  margin-top: 45px;
  height: 540px;
`;
export const Container = styled.div<{ background: string }>`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  ${({ background }) => ` background-image:url(${background})`};
  &:before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    display: block;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
export const Inner = styled.div``;
export const Cover = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export const Title = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: 4.8rem;
  padding-bottom: 3rem;
  ${({ theme }) => `
    color:${theme.colors.light};
  `}
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    ${({ theme }) => `background-color:${theme.colors.light_secondary}`};
    content: '';
  }
`;
export const SubTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
  ${({ theme }) => `color:${theme.colors.light_secondary}`};
`;
