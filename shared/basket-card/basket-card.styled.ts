import styled from "styled-components";

export const StyledBasketCard = styled.div`
  padding: ${({ theme }) => theme.units.unit2} 0;
  width: 100%;
  display: flex;
`;

export const BasketCardImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: ${({ theme }) => theme.units.unit2};

  img {
    object-fit: cover;
  }
`;

export const BasketCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-right: ${({ theme }) => theme.units.unit4};
  position: relative;

  .card-title {
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .card-clear {
    width: 20px;
    height: 20px;
    font-size: 20px;
    position: absolute;
    top: 2px;
    right: 0;
    cursor: pointer;
  }
`;
