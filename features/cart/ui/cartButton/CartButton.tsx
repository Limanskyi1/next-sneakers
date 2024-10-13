"use client";
import Image from "next/image";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { ISneakers } from "@/entities/sneakers";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { addToCart } from "../../model/cartSlice";
import styles from "./CartButton.module.scss";

interface CartButtonProps {
  item: ISneakers;
}

export const CartButton = ({ item }: CartButtonProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);


  const onClick = () => {
    dispatch(addToCart(item));
  };

  return (
    <Image
      className={styles.cartButton}
      src={isInCart ? "/checked.svg" : "/plus.svg"}
      alt="plus icon"
      width={32}
      height={32}
      onClick={onClick}
    />
  );
};
