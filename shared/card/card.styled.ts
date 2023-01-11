import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.shadow};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 240px;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const CardDetails = styled.div`
  padding: ${({ theme }) => theme.units.unit2};
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-title {
    font-size: ${({ theme }) => theme.font.fontSize.m};
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .card-description {
    font-size: ${({ theme }) => theme.font.fontSize.s};
    margin: ${({ theme }) => theme.units.unit1} 0;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.units.unit2};
  align-items: center;
  justify-content: space-between;
`;
