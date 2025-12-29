"use client";

import { cn } from "../lib/utils";
import { useTranslations } from "next-intl";
import { cormorantSC } from "../../public/styles/fonts";

export function Header() {
  const t = useTranslations("home");

  return (
    <div className="relative">
      <div className={cn("mt-[-60px] font-semibold", cormorantSC.className)}>
        <img
          src="/header-image.jpg"
          alt="Background Image"
          className="w-screen h-screen object-cover "
        />
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <p className="text-5xl md:text-7xl text-primary">{t("nameTitle1")}</p>
          <p className="text-3xl md:text-5xl text-primary pt-6">
            {t("nameTitle2")}
          </p>
        </div>

        <div className="text-2xl flex flex-col gap-4 absolute bottom-[60px] left-1/2 transform -translate-x-1/2">
          <button className="header-btn cursor-pointer flex gap-2 justify-center">
            {t("comingSoon")}
          </button>
        </div>
      </div>
    </div>
  );
}
