"use client";
import Image from "next/image";
import styles from "./InfoBox.module.scss";
import { useLocale, useTranslations } from "next-intl";
import { Arrow } from "@/shared/icons";
import { useRouter } from "next/navigation";

interface InfoBoxProps {
  imageSrc: string;
  title: string;
  desc: string;
  className?: string;
  onClickBtn?: () => void;
}

export const InfoBox = ({ imageSrc, title, desc, className ,onClickBtn}: InfoBoxProps) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("favorites-empty");
  return (
    <div className={styles.infoBox + " " + className}>
      <Image src={imageSrc} alt={title} width={70} height={70} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <button onClick={onClickBtn ? onClickBtn : router.back}>
        <Arrow fill="white" />
        {t("linkText")}
      </button>
    </div>
  );
};
