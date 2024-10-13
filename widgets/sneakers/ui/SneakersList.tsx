import { ISneakers } from "@/entities/sneakers";
import { Sneakers } from "./Sneakers";
import styles from "./SneakersList.module.scss";
import { memo } from "react";

interface SneakersListProps {
  sneakerses: ISneakers[];
}

export const SneakersList = memo(({ sneakerses }: SneakersListProps) => {

  return (
    <div className={styles.list}>
      {sneakerses.map((sneakers) => (
        <Sneakers
          key={sneakers?.id}
          id={sneakers?.id}
          product_id={sneakers?.product_id}
          title={sneakers?.title}
          imageUrl={sneakers?.imageUrl}
          price={sneakers?.price}
          isLiked={sneakers?.isLiked}
        />
      ))}
    </div>
  );
});
