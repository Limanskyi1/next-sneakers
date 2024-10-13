"use client";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { calculatePercentage } from "@/shared/utils/calculatePercentage";
import { CartOverlay } from "../cartOverlay/CartOverlay";
import { CartHead } from "../cartHead/CartHead";
import { EmptyCart } from "../emptyCart/EmptyCart";
import { closeCart, resetCart } from "../../model/cartSlice";
import { makeOrder } from "../../model/actions/makeOrder";
import { CartItems } from "../cartItems/CartItems";

import styles from "./Cart.module.scss";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  if (cartItems.length < 1) return <EmptyCart />;

  const onClickMakeOrder = async () => {
    try {
      await makeOrder({
        items: cartItems,
        price: totalPrice,
      });
      dispatch(closeCart());
      setTimeout(() => dispatch(resetCart()),200)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartOverlay>
      <CartHead />
      <CartItems items={cartItems}/>
      <div className={styles.total}>
        <div className={styles.totalItem}>
          <span>Итого:</span>
          <span>{totalPrice} руб.</span>
        </div>
        <div className={styles.totalItem}>
          <span>Налог 5%:</span>
          <span>{calculatePercentage(totalPrice, 5)} руб.</span>
        </div>
        <Button onClick={onClickMakeOrder}>Оформить заказ</Button>
      </div>
    </CartOverlay>
  );
};
