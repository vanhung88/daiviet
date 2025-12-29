import { cn } from "../lib/utils";
import { cormorantSC, openSans } from "../../public/styles/fonts";
import { useTranslations } from "next-intl";

export function Footer({ className }: { className?: string }) {
  const t = useTranslations("footer");

  return (
    <div className={cn("h-[100px] mt-16", cormorantSC.className)}>
      <div className="wave-line-top bg-neutral-50 h-[40px] -mb-px" />
      <footer
        className={`text-xs items-center flex-col bg-neutral-50 py-10 px-10 text-neutral-950 flex justify-center ${className}`}
      >
        <div
          className={cn(
            "text-xl font-bold text-primary",
            cormorantSC.className
          )}
        >
          {t("title")}
        </div>
        <div className={cn("", openSans.className)}>{t("description")}</div>
        <div className={cn("flex gap-4 pt-2", openSans.className)}>
          <p>Discord </p>
          <p>Twitter </p>
          <p>YouTube</p>
        </div>
      </footer>
    </div>
  );
}
