"use client";
import { routing } from "@/i18n/routing";
import { useLangSwitcher } from "../model/useLangSwitcher";
import styles from "./LangSwitcher.module.scss";

const { locales } = routing;

export const LangSwitcher = () => {
  const { currentLocale, onClickLocale } = useLangSwitcher();

  return (
    <div className={styles.langSwitcher}>
      {locales.map((locale) => (
        <span
          className={currentLocale === locale ? styles.active : ""}
          onClick={() => onClickLocale(locale)}
          key={locale}
        >
          {locale}
        </span>
      ))}
    </div>
  );
};
