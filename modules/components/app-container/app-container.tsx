import { IComponentProps } from "../../../common/types";
import { Header } from "../header";
import { Cart } from "../cart";
import { Container, ContainerBody, CenteredContainer } from "./app-container.styled";

const AppContainer: React.FC<IComponentProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Cart />
      <ContainerBody>
        <CenteredContainer>{children}</CenteredContainer>
      </ContainerBody>
    </Container>
  );
};

export default AppContainer;
