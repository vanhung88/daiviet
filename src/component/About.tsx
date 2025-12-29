import { cormorantSC } from "@/public/styles/fonts";
import { cn } from "../lib/utils";
import { useTranslations } from "next-intl";

export function About({ className }: { className?: string }) {
  const t = useTranslations("home");

  return (
    <div className={`px-4 md:px-16 ${className}`}>
      <div
        className={cn(
          "text-4xl text-center text-primary font-semibold",
          cormorantSC.className
        )}
      >
        {t("aboutOurGame")}
      </div>
      <div className="pt-10 text-lg">
        <div>{t("about1")}</div>

        <div className="pt-10">{t("about2")}</div>
      </div>
    </div>
  );
}
