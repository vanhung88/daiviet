import { cn } from "../lib/utils";
import { iceCreamMan } from "../../public/styles/fonts";
import { useTranslations } from "next-intl";

export function Footer({ className }: { className?: string }) {
  const t = useTranslations("home");

  return (
    <div className={cn("mt-16", iceCreamMan.className)}>
      <div className="wave-line-top bg-neutral-50 h-[60px]" />
      <footer
        className={`bg-neutral-50 py-10 px-10 text-neutral-950 flex justify-center ${className}`}
      >
        <p className="text-neutral-950">{t("allRightsReserved")}</p>
      </footer>
    </div>
  );
}
