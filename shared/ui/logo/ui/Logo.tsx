import Image from "next/image";
import styles from './Logo.module.scss';
import { useTranslations } from "next-intl";

export const Logo = () => {
  const t = useTranslations('header');
  return (
    <div className={styles.logo}>
      <Image src="/logo.png" alt="Logo" width={40} height={40}/>
      <div className={styles.text}>
          <p>NEXT SNEAKERS</p>
          <p>{t('logoDesc')}</p>
      </div>
    </div>
  )
}
