import Image from "next/image";
import styles from "./Sneakers.module.scss";
import { LikeButton } from "@/features/like";
import { memo } from "react";
import { useTranslations } from "next-intl";
import { CartButton } from "@/features/cart/ui/cartButton/CartButton";

interface SneakersProps {
  id:number;
  product_id: string;
  title: string;
  price: number;
  imageUrl: string;
  isLiked: boolean;
}

export const Sneakers = memo((props: SneakersProps) => {
  const { id, product_id, title, price, imageUrl, isLiked } = props;
  const t = useTranslations('sneakers');
  return (
    <div className={styles.sneakers}>
      <LikeButton isLiked={isLiked} id={id}/>
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
          <span>{t('price')}:</span>
          <span>{price} {t('currency')}.</span>
        </div>
        <CartButton item={props}/>
      </div>
    </div>
  );
});
