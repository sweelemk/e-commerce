import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(25%, 420px);
  grid-template-rows: 72px 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerBody = styled.div`
  height: 100%;
  overflow: auto;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-start: 1;
  grid-column-end: 2;

  padding: ${({ theme }) => theme.units.unit3};
`;


export const CenteredContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;