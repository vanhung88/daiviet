import { iceCreamMan, openSans } from "@/public/styles/fonts";
import { cn } from "../lib/utils";
import { useTranslations } from "next-intl";

export function About({ className }: { className?: string }) {
  const t = useTranslations("home");

  return (
    <div className={`px-6 md:px-16 ${className}`}>
      <div className={cn("text-5xl text-center", iceCreamMan.className)}>
        {t("aboutOurGame")}
      </div>
      <div className="pt-10 text-lg">
        <div>{t("about1")}</div>

        <div className="pt-10">{t("about2")}</div>
      </div>
    </div>
  );
}
