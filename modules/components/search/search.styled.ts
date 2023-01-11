import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  gap: 16px;

  & input {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;