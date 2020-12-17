import styled from 'styled-components/macro';
export const Container = styled.div`
  border-radius: 0.4rem;
  ${({ theme }) => `
    border:1px solid ${theme.colors.medium};
  `}
`;
export const Inner = styled.div`
  ${({ theme }) => `
  padding:${theme.padding * 10}rem ${theme.padding * 5}rem;
    
  `}
`;
export const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;

  ${({ theme }) => `
        padding:${theme.padding * 2}rem ${theme.padding * 1}rem;
        font-weight:${theme.normal_font};
        margin-bottom:${theme.margin * 2}rem;
        color:${theme.colors.light_secondary};
  `};
`;
export const Requirments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${({ theme }) => `
        margin-bottom:${theme.margin * 2}rem;
    `}
  .need {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({ theme }) => `
        padding:${theme.padding * 1}rem ${theme.padding * 2}rem;
    `}
    &-icon {
      font-size: 3rem;
      ${({ theme }) => `
        padding-bottom:${theme.padding * 1}rem;
    `}
    }
  }
  .parameter {
    text-align: center;

    &-value {
      font-size: 2rem;
      ${({ theme }) => `
        margin-bottom:${theme.margin * 0.5}rem;
        font-weight:${theme.bold_font};
    `}
    }
    &-name {
      font-size: 1.6rem;
    }
  }
  ${({ theme }) => ``}
`;
export const Solutions = styled.div`
  .solution {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &-icon {
      font-size: 2rem;
      white-space: nowrap;
      width: 48px;
      height: auto;
      img {
        display: block;
        max-width: 100%;
      }
    }
    .parameters-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      .parameter {
        text-align: right;
        ${({ theme }) => `
        padding:${theme.padding * 1}rem ${theme.padding * 1}rem;
    `}
        &-value {
          font-size: 1.6rem;
          ${({ theme }) => `
            margin-bottom:${theme.margin * 1}rem;
            font-weight:${theme.bold_font};
            `}
        }
        &-name {
          font-size: 1.6rem;
          ${({ theme }) => `
    `}
        }
      }
    }
  }
  ${({ theme }) => ``}
`;
