import { LangSwitcher } from "@/shared/ui/langSwitcher";
import { Logo } from "@/shared/ui/logo";
import { BookmarksLink } from "../BookmarksLink";
import Link from "next/link";
import { useLocale } from "next-intl";
import { CartOpener } from "@/features/cart";
import { OrdersLink } from "@/entities/order/ui";
import styles from "./Header.module.scss";

export const Header = () => {
  const locale = useLocale();
  return (
    <header className={styles.header}>
      <Link href={`/${locale}`}>
        <Logo />
      </Link>
      <LangSwitcher />
      <div style={{ display: "flex", gap: "20px" }}>
        <CartOpener />
        <Link href={`${locale}/favorites`}>
          <BookmarksLink />
        </Link>
        <OrdersLink />
      </div>
    </header>
  );
};
