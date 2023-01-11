import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  &.input-preffix {
    .icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
      position: absolute;
      left: 14px;
      z-index: 1;
    }
    &-small {
      .icon {
        width: 18px;
        height: 18px;
        font-size: 18px;
        left: 10px;
      }
    }
    .input {
      padding-left: 40px;

      &.input-small {
        padding-left: 32px;
      }

      &.input-large {
        padding-left: 40px;
      }
    }
  }
`;

export const StyledInput = styled.input`
  &.input {
    font-size: ${({ theme }) => theme.font.fontSize.default};
    font-family: ${({ theme }) => theme.font.fontFamily.Avenir};
    padding: 0 24px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius.m};
    position: relative;
    white-space: nowrap;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    transition: background-color 0.3s ease, color 0.3s ease,
      border-color 0.3s ease;
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 200;
    box-sizing: border-box;
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary20};
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &.input-small {
      height: 32px;
      font-size: 14px;
      padding: 0 16px;
    }

    &.input-large {
      height: 52px;
      font-size: 16px;
      padding: 0 32px;
    }

    &.input-block {
      width: 100%;
    }

    &.input-error {
      border-color: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerBg};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.dangerHover};
      }
    }

    &.input-success {
      border-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successBg};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.successHover};
      }
    }
  }
`;
