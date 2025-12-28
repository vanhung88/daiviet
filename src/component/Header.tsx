"use client";

import { SteamIcon } from "@/public/SteamLogo";
import { YoutubeIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { useTranslations } from "next-intl";
import { cinzel } from "../../public/styles/fonts";

export function Header() {
  const t = useTranslations("home");

  return (
    <div className="relative">
      <div className={cn("mt-[-60px] font-semibold", cinzel.className)}>
        <img
          src="/header-image.jpg"
          alt="Background Image"
          className="w-screen h-screen object-cover "
        />
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <p className="text-5xl md:text-7xl text-primary">{t("nameTitle1")}</p>
          <p className="text-3xl md:text-4xl text-primary pt-6">
            {t("nameTitle2")}
          </p>
        </div>

        <div className="text-lg flex flex-col gap-4 absolute bottom-[60px] left-1/2 transform -translate-x-1/2">
          <button
            className="header-btn cursor-pointer flex gap-2 justify-center"
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=dQwgXcQ");
            }}
          >
            <YoutubeIcon />
            {t("watchTrailer")}
          </button>

          <button
            className="header-btn cursor-pointer flex gap-2 justify-center"
            onClick={() => {
              window.open("https://store.steampowered.com/");
            }}
          >
            <SteamIcon className="w-6 h-6" />
            {t("playNow")}
          </button>
        </div>
      </div>
    </div>
  );
}
