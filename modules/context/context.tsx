import { createContext, Dispatch, useContext, useMemo, useReducer } from "react";
import cartReducer, { CartAction, initialCartState, initialCartStateType } from "./reducers/cart-reducer";

export type AppContextValues = {
  cartState: initialCartStateType; 
  cartDispatch: Dispatch<CartAction>;
};

const AppContext = createContext<AppContextValues>({
  cartState: initialCartState,
  cartDispatch: () => null
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    initialCartState
  );
  const value = useMemo(
    () => ({
      cartState,
      cartDispatch,
    }),
    [cartState]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
