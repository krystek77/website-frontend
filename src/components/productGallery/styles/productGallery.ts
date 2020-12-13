import styled from 'styled-components/macro';
export const Container = styled.div`
  ${({ theme }) =>
    `   
        padding:${theme.padding * 4}rem ${theme.padding * 3}rem;
    `}
`;
export const Inner = styled.div`
  width: 480px;
  margin: 0 auto;
  ${({ theme }) => ``}
`;
export const ViewportImage = styled.div`
  width: 100%;
  max-height: 640px;
  border-radius: 0.6rem;
  /* padding: 1.5rem; */
  img {
    display: block;
    max-width: 100%;
    border-radius: 0.6rem;
    background: rgb(90, 89, 94);
    background: radial-gradient(
      circle,
      rgba(90, 89, 94, 1) 50%,
      rgba(46, 46, 46, 1) 100%
    );
  }
  ${({ theme }) => `
  `}
`;
export const ViewportThumbnails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => ``}
`;
export const Thumbnail = styled.div<{ url: string; active: boolean }>`
  position: relative;
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 0.4rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme, url }) =>
    `   border:1px solid ${theme.colors.dark};
        margin:${theme.margin * 1}rem;
        background-image:url(${url});
    `};

  &:after {
    position: absolute;
    display: none;
    opacity: 0.98;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: 'oglądasz';
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;

    ${({ theme }) => `
      background:${theme.colors.primary};
      color:${theme.colors.light};
    `}
  }
  ${({ theme, active }) =>
    active &&
    `
    &:after {
     display:flex;
    }
  `};
`;
