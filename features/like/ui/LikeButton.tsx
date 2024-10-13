"use client";
import Image from "next/image";
import styles from "./LikeButton.module.scss";
import { memo, useState } from "react";
import { addLike, removeLike } from "../model/actions";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
  isLiked: boolean;
  id:number;
  className?: string;
}

export const LikeButton = memo(({
  isLiked,
  id,
  className = undefined,
}: LikeButtonProps) => {
  const router = useRouter();
  const [isLikedValue, setIsLikedValue] = useState(isLiked);

  const toggleLike = async () => {
    if(!isLiked){
      setIsLikedValue(true);
      await addLike(id);
    } else {
      setIsLikedValue(false);
      await removeLike(id);
    }
  };

  return (
    <Image
      className={`${styles.like} ${className}`}
      src={isLikedValue ? "/like-2.svg" : "/like-1.svg"}
      alt="like icon"
      width={32}
      height={32}
      onClick={toggleLike}
    />
  );
});
