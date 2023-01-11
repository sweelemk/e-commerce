import { IComponentProps } from "../../../common/types";
import { AppContextProvider } from "../../context/context";
import { AppContainer } from "../app-container";
import { Theme } from "../theme";

const AppLayout: React.FC<IComponentProps> = ({ children }) => {
  return (
    <AppContextProvider>
      <Theme>
        <AppContainer>{children}</AppContainer>
      </Theme>
    </AppContextProvider>
  );
};

export default AppLayout;
