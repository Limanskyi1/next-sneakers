import Image from "next/image";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { deleteFromCart } from "../../model/cartSlice";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  title: string;
  price: number;
  imageUrl: string;
  id: number;
}

export const CartItem = ({ title, price, imageUrl, id }: CartItemProps) => {
  const dispath = useAppDispatch();
  return (
    <div className={styles.cartItem}>
      <Image src={imageUrl} alt="sneakers img" width={70} height={70} />
      <div className={styles.info}>
        <p>{title}</p>
        <span>{price} руб.</span>
      </div>
      <Image
        onClick={() => dispath(deleteFromCart(id))}
        className={styles.close}
        src="/close.svg"
        alt="close icon"
        width={32}
        height={32}
      />
    </div>
  );
};
