import styled from 'styled-components/macro';
export const Container = styled.aside<{ showSidebar: boolean }>`
  position: fixed;
  top: 45px;
  height: calc(100vh - 45px);
  width: 300px;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  transform: translateX(-100%);
  transition: transform 1s ease-out;
  ${({ showSidebar }) => showSidebar && `transform:translateX(0)`};
`;
export const Inner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.padding * 6}rem`};
  div:nth-child(3) {
    flex-grow: 1;
    & > div:first-child {
      a {
        color: ${({ theme }) => theme.colors.dark};
        font-size: 2.8rem;
        &:hover {
          color: ${({ theme }) => theme.colors.dark_primary};
        }

        &:focus {
          color: ${({ theme }) => theme.colors.dark_primary};
        }
        &:active {
          color: ${({ theme }) => theme.colors.dark_primary};
        }
      }
    }
  }
`;
export const Title = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.bold_font};
  padding-top: ${({ theme }) => `${theme.padding}rem`};
  padding-bottom: ${({ theme }) => `${theme.padding}rem`};
  padding-left: ${({ theme }) => `${theme.padding * 1.5}rem`};
  padding-right: ${({ theme }) => `${theme.padding * 1.5}rem`};
`;
