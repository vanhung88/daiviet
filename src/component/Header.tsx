"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../component/ui/dropdown-menu";
import { cn } from "../lib/utils";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export function Header() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (locale: "en" | "vi") => {
    router.replace(pathname, { locale });
  };

  return (
    <header
      className={cn(
        "justify-start md:justify-center items-center sticky top-0 right-0 w-full z-10 left-0 h-[60px] flex px-10 bg-neutral-950/30"
      )}
    >
      <div className="flex gap-6">
        <Link href="/" className="hover:text-[#e1c275]">
          {t("home")}
        </Link>

        <Link href="/contact" className="hover:text-[#e1c275]">
          {t("contact")}
        </Link>

        <Link href="/news" className="hover:text-[#e1c275]">
          {t("news")}
        </Link>
      </div>

      <div className="absolute right-10">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer text-md">
            {locale === "en" ? "🏴󠁧󠁢󠁥󠁮󠁧󠁿 English" : " 🇻🇳 Vietnamese"}
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-neutral-600/60 border">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                changeLocale("en");
              }}
            >
              🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => changeLocale("vi")}
            >
              🇻🇳 Vietnamese
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
