"use client"
import Image from "next/image";
import styles from './CartOpener.module.scss';
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { openCart } from "../../model/cartSlice";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const CartOpener = () => {
  const t = useTranslations('header');
  const dispath = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  return (
    <div className={styles.сartOpener} onClick={() => dispath(openCart())}>
        <Image src="/cart.svg" alt="cart icon" width={18} height={18}/>
        <span>{totalPrice} {t('currency')}</span>
    </div>
  )
}
