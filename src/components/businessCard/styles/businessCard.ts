import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div`
  /* max-width: 480px; */
  margin: 0 auto;
  place-self: stretch;
  ${({ theme }) => `
    padding: ${theme.margin * 4}rem ${theme.margin * 5}rem;
  `};
`;
export const Inner = styled.div`
  ${({ theme }) => `
    
  `}
`;
export const Article = styled.article`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  ${({ theme }) => `
    color: ${theme.colors.dark};
     font-weight:${theme.normal_font};
  `};
`;
export const Description = styled.p`
  flex-grow: 1;
  text-align: justify;
  overflow: hidden;
  ${({ theme }) => `
    color: ${theme.colors.dark};
    margin-bottom:${theme.margin * 4}rem;
    border-bottom:1px solid ${theme.colors.primary};
    padding-bottom:${theme.padding * 4}rem;
  `};
`;
export const Link = styled(ReactRouterLink)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: none;
  width: max-content;
  margin-left: auto;

  ${({ theme }) => `
    color:${theme.colors.primary};
    font-weight: ${theme.bold_font};
    
  `};
  &:hover {
    ${({ theme }) => `
    color:${theme.colors.dark_primary};
  `}
  }

  &:focus {
    ${({ theme }) => `
    color:${theme.colors.dark_primary};
    
  `}
  }

  &:active {
    ${({ theme }) => `
    color:${theme.colors.dark_primary};
    
  `}
  }

  span {
    display: block;
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-left: 1rem;
    border-radius: 0.4rem;
    ${({ theme }) => `
        background-color:${theme.colors.primary};
        color:${theme.colors.light};
        font-weight: ${theme.bold_font};
        
    `}
  }
  &:hover span {
    ${({ theme }) => `
    background-color:${theme.colors.medium};
    color:${theme.colors.dark_primary};
    
  `}
  }
  &:focus span {
    ${({ theme }) => `
    background-color:${theme.colors.medium};
    color:${theme.colors.dark_primary};
    
  `}
  }
  &:active span {
    ${({ theme }) => `
    background-color:${theme.colors.medium};
    color:${theme.colors.dark_primary};
    
  `}
  }
`;

export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;

export const Image = styled.div`
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  max-width: 480px;
  margin: 0 auto;
  border-radius: 0.6rem;
  padding: 1.5rem;
  overflow: hidden;
  ${({ theme }) => `
    background-color:${theme.colors.light_primary};
    padding: ${theme.padding * 3}rem;
    margin-bottom:${theme.margin * 4}rem;
    border:1px solid ${theme.colors.dark};
    `}
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    border-radius: 0.6rem;
    transition: filter 0.3s ease-out;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
  }
`;
