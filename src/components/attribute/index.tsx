import React from 'react';
import styled from 'styled-components/macro';

type PropsAttribute = {
  attribute: {
    name: string;
    unit: string | null;
    value: string;
  };
};

const StyledAttribute = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.colors.medium};
  `}
  .name {
    margin-right: 1rem;
    width: 240px;
    font-weight: normal;
  }
  .unit {
    margin-right: 1rem;
    font-size: 1.3rem;
  }
  .value {
    text-align: right;
    flex-grow: 1;
    font-weight: bold;
  }
`;

export const AttributeWrapper: React.FC<PropsAttribute> = ({ attribute }) => {
  return (
    <StyledAttribute className='attribute'>
      <span className='name'>{attribute.name}</span>
      <span className='unit'>{attribute.unit}</span>
      <span className='value'>{attribute.value}</span>
    </StyledAttribute>
  );
};

export default AttributeWrapper;
