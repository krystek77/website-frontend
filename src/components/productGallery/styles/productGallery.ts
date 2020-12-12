import styled from 'styled-components/macro';
export const Container = styled.div`
  ${({ theme }) =>
    `   
        padding:${theme.padding * 4}rem ${theme.padding * 3}rem;
    `}
`;
export const Inner = styled.div`
  max-width: 480px;
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
    // border:1px solid ${theme.colors.dark};
    // background-color: ${theme.colors.primary};
  `}
`;
export const ViewportThumbnails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => ``}
`;
export const Thumbnail = styled.div<{ url: string }>`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 0.4rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }

  ${({ theme, url }) =>
    `   border:1px solid ${theme.colors.dark};
        margin:${theme.margin * 1}rem;
        background-image:url(${url})
    `}
`;
