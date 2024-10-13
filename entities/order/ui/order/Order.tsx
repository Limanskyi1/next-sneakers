import { useTranslations } from "next-intl";
import { OrderItem } from "../orderItem/OrderItem";
import styles from "./Order.module.scss";
import { ISneakers } from "@/entities/sneakers";

interface IOrder {
    id:number;
    price:number;
    items:ISneakers[];
}

export const Order = ({id,price,items}:IOrder) => {
  const t = useTranslations("sneakers");
  return (
    <div className="order">
      <div className={styles.top}>
        <h2 className={styles.title}>Заказ #{id}</h2>
        <span>Total Price : {price} {t("currency")}</span>
      </div>
      <div className={styles.list}>
        {items.map((item) => (
            <OrderItem key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
        )) }
      </div>
    </div>
  );
};
