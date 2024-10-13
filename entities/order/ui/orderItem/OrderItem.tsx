import { useTranslations } from "next-intl";
import styles from "./OrderItem.module.scss";
import Image from "next/image";


interface OrderItemProps {
    title: string;
    price: number;
    imageUrl: string;
}

export const OrderItem = ({title, price, imageUrl}:OrderItemProps) => {
  const t = useTranslations("sneakers");
  return (
    <div className={styles.orderItem}>
      <Image
        className={styles.img}
        src={imageUrl}
        alt="sneakers img"
        width={133}
        height={112}
      />
      <p>{title}</p>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>{t("price")}:</span>
          <span>
            {price} {t("currency")}.
          </span>
        </div>
      </div>
    </div>
  );
};
