import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Arrow } from "@/shared/icons";
import { closeCart } from "../../model/cartSlice";
import styles from "./CartHead.module.scss";

export const CartHead = () => {
  const dispath = useAppDispatch();
  return (
    <div className={styles.head}>
      <div onClick={() => dispath(closeCart())}>
        <Arrow fill="#000" />
      </div>
      <h2>Корзина</h2>
    </div>
  );
};
