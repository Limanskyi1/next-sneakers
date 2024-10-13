import { useAppSelector } from "@/shared/hooks/useAppSelector";
import styles from "./CartOverlay.module.scss"

import { ReactNode } from "react";
export const CartOverlay = ({ children }: { children: ReactNode }) => {

  const isOpen = useAppSelector((state) => state.cart.isOpen);
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}>
      <div className={`${styles.cart} ${isOpen ? styles.cartActive : ""}`}>{children}</div>
    </div>
  );
};
