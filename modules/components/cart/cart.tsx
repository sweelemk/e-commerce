import { Fragment, useCallback } from "react";
import { BasketCard, Button, Empty } from "../../../shared";
import { CartActionKind } from "../../context/actions";
import { useAppContext } from "../../context/context";
import { formatPrice } from "../../utils";
import {
  StyledCart,
  CartContainer,
  CartCardsList,
  Divider,
  CartFooter,
} from "./cart.styled";

const Cart: React.FC = () => {
  const { cartState, cartDispatch } = useAppContext();
  const removeFromCart = (id: string) => {
    cartDispatch({
      type: CartActionKind.REMOVE_FROM_CART,
      payload: id,
    });
  };
  const price = cartState.selected.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <StyledCart>
      <Fragment>
        <CartContainer>
          <div className="title">Carts</div>
          {cartState.selected?.length ? (
            <Fragment>
              <CartCardsList>
                {cartState.selected.map((card, _idx) => (
                  <Fragment key={card.id}>
                    <BasketCard
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      price={card.price}
                      image={card.image}
                      description={card.description}
                      handleRemove={removeFromCart}
                    />
                    {cartState.selected.length - 1 !== _idx && <Divider />}
                  </Fragment>
                ))}
              </CartCardsList>
              <CartFooter>
                <div className="total">
                  <span>Total:</span>
                  <span>{formatPrice(price)}</span>
                </div>
                <Button label="Order" block variant="primary" />
              </CartFooter>
            </Fragment>
          ) : (
            <Empty title="No items have been added to the cart yet." />
          )}
        </CartContainer>
      </Fragment>
    </StyledCart>
  );
};

export default Cart;
