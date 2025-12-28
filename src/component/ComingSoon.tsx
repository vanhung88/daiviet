"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SettingsIcon } from "lucide-react";

export function ComingSoon() {
  const t = useTranslations("home");
  const router = useRouter();

  return (
    <main className="bg-neutral-50 h-screen text-neutral-950 flex justify-center items-center flex-col gap-4">
      <div className="text-4xl font-bold text-neutral-950 mb-6">
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
