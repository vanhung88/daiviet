"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { cn } from "../lib/utils";
import { cormorantSC } from "@/public/styles/fonts";

export function ComingSoon() {
  const t = useTranslations("home");
  const router = useRouter();

  return (
    <div className="relative">
      <div className={cn("mt-[-60px] font-semibold", cormorantSC.className)}>
        <img
          src="/header-image.jpg"
          alt="Background Image"
          className="w-screen h-screen object-cover "
        />
        <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t("comingSoonPage")}
          </div>
          <button
            className="text-xl header-btn cursor-pointer flex gap-2 justify-center text-white bg-neutral-950 border"
            onClick={() => {
              router.push("/");
            }}
          >
            {t("backToHome")}
          </button>
        </div>
      </div>
    </div>
  );
}
