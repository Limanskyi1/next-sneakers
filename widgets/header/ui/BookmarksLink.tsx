import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./BookmarksLink.module.scss";

export const BookmarksLink = () => {
  const t = useTranslations("header");
  return (
    <div className={styles.bookmarksItem}>
      <Image src="/heart.svg" alt="bookmarks icon" width={18} height={18} />
      <span>{t("bookmarks")}</span>
    </div>
  );
};
