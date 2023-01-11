import styled from "styled-components";

export const StyledHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;

  display: flex;
  align-items: center;

  padding: 0 ${({ theme }) => theme.units.unit3};

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;


export const LogoText = styled.a`
  font-size: ${({ theme }) => theme.font.fontSize.l};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  text-decoration: none;
`;
