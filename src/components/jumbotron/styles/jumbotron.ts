import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const WrapperLink = styled(ReactRouterLink)``;
export const Pane = styled.div``;
export const Title = styled.h3``;
export const Description = styled.p``;
export const ButtonLink = styled(ReactRouterLink)``;
export const Label = styled.span<{ id: string }>`
  display: none;
  visibility: hidden;
`;
