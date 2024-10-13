import { ISneakers } from "@/entities/sneakers";
import { CartItem } from "../cartItem/CartItem";
import styles from "./CartItems.module.scss";

interface CartItemProps {
  items: ISneakers[];
}

export const CartItems = ({ items }: CartItemProps) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          id={item.id}
        />
      ))}
    </div>
  );
};
