"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SettingsIcon } from "lucide-react";

export function ComingSoon() {
  const t = useTranslations("home");
  const router = useRouter();

  return (
    <main className="bg-[#130f0b] h-screen text-white flex justify-center items-center flex-col gap-4">
      <div className="text-2xl md:text-4xl font-bold mb-6 text-center">
        {t("comingSoon")}
      </div>
      <button
        className="header-btn cursor-pointer flex gap-2 justify-center text-white bg-neutral-950 border"
        onClick={() => {
          router.push("/");
        }}
      >
        {t("backToHome")}
      </button>
    </main>
  );
}
