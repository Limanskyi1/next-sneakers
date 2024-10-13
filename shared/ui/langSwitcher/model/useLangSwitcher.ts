import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const useLangSwitcher = () => {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const onClickLocale = (newLocale: string) => {
    startTransition(() => {
      const newPathname = `/${newLocale}${pathname.replace(`/${currentLocale}`, "")}`;
      router.replace(newPathname);
    });
  };
  return {
    currentLocale,
    onClickLocale,
  };
};
