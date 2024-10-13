import { useLocale, useTranslations } from "next-intl";
import styles from './OrdersLink.module.scss';
import Image from "next/image";
import Link from "next/link";

export const OrdersLink = () => {
    const locale = useLocale();
    const t = useTranslations('header');
    return (
      <Link href={`/${locale}/orders`} className={styles.ordersLink}>
          <Image src="/profile.svg" alt="bookmarks icon" width={18} height={18}/>
          <span>{t('orders')}</span>
      </Link>
    )
}
