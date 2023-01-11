import styled from "styled-components";

export const StyledCart = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 72px);
  position: relative;

  .title {
    padding: ${({ theme }) => theme.units.unit3};
    margin-bottom: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
`;

export const CartCardsList = styled.div`
  padding: 0 ${({ theme }) => theme.units.unit3} ${({ theme }) => theme.units.unit3};
  flex: 1;
  overflow: auto;
`;

export const CartFooter = styled.div`
  padding: ${({ theme }) => theme.units.unit3};

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.units.unit2};
    font-size: ${({ theme }) => theme.font.fontSize.l};
  }
`;
