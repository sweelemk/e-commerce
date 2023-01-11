import styled from 'styled-components';

export const SelectStyled = styled.div`
  .select-icon {
    display: flex;
    padding: 0 2px 0 16px;
    font-size: 20px;
  }
  
  .dropdown-indicator {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 16px;
    width: 16px;
    
    & > svg {
      position: absolute;
      
      &:first-child {
        top: -5px;
      }
      &:last-child {
        bottom: -5px;
      }
    }
  }
  
  .clear-indicator {
    display: flex;
  }
  
  [class*='-control'] {
    box-shadow: none;
    min-height: 44px;
    border: 1px solid ${({theme}) => theme.colors.grey};
    border-radius: ${({theme}) => theme.borderRadius.m};
    cursor: pointer;
    
    &:hover {
      border-color: ${({theme}) => theme.colors.primary20};
    }
  }

  [class*='-placeholder'] {
    color: ${({ theme }) => theme.colors.grey};
    white-space: nowrap;
  }
  
  [class*='-ValueContainer'], [class*='-indicatorContainer'] {
    padding-top: 0;
    padding-bottom: 0;
  }

  [class*='-menu'] {
    border-radius: ${({theme}) => theme.borderRadius.m};
    box-shadow: ${({theme}) => theme.boxShadow.shadow};
    border: 1px solid ${({theme}) => theme.colors.primary};
  }

  [class*='-option'] {
    &.focused {
      background-color: ${({theme}) => theme.colors.primary90};
    }
    &.selected {
      background-color: ${({theme}) => theme.colors.primary};
    }
  }

  [class*='-singleValue'] {
    font-size: 16px;
  }
  
  &.select-small {
    [class*='-control'] {
      min-height: 32px;
      height: 32px;
    }

    [class*='-placeholder'] {
      font-size: 14px;
    }

    [class*='-singleValue'] {
      font-size: 14px;
    }

    [class*='-Input'] {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 14px;
    }

    [class*='-menu'] {
      font-size: 14px;
    }

    [class*='-ValueContainer'] {
      padding-left: 2px;
      padding-right: 2px;
    }
    
    .select-icon {
      padding-left: 12px;
      font-size: 16px;
    }
  }
  
  &.select-large {
    [class*='-control'] {
      min-height: 52px;
      height: 52px;
    }

    [class*='-placeholder'] {
      font-size: 16px;
    }
    [class*='-Input'] {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 16px;
    }

    [class*='-menu'] {
      font-size: 16px;
    }

    .select-icon {
      font-size: 24px;
    }
  }
`;
