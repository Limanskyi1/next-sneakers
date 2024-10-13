import { useTranslations } from "next-intl";
import { InfoBox } from "@/shared/ui/infoBox";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { closeCart } from "../../model/cartSlice";
import { CartHead } from "../cartHead/CartHead";
import { CartOverlay } from "../cartOverlay/CartOverlay";

import styles from "./EmptyCart.module.scss";

export const EmptyCart = () => {
  const dispath = useAppDispatch();
  const t = useTranslations("emptyCart");
  return (
    <CartOverlay>
      <CartHead />
      <InfoBox
        imageSrc="/package-icon.png"
        title={t("title")}
        desc={t("subtitle")}
        className={styles.empty}
        onClickBtn={() => dispath(closeCart())}
      />
    </CartOverlay>
  );
};
