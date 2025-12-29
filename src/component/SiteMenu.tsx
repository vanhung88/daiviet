"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "../lib/utils";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { headerPath } from "../lib/type";
import { Link } from "@/i18n/navigation";
import { useIsMobile } from "../lib/useMobile";
import { cormorantSC } from "../../public/styles/fonts";

export function SiteMenu() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isMobile = useIsMobile();

  const changeLocale = (locale: "en" | "vi") => {
    router.replace(pathname, { locale });
  };

  return (
    <header
      className={cn(
        "justify-start md:justify-center items-center sticky top-0 right-0 w-full z-10 left-0 h-[60px] flex px-4 bg-neutral-950/30"
      )}
    >
      <div
        className={cn("flex gap-4 font-medium text-xl", cormorantSC.className)}
      >
        <Link
          href={`/`}
          className={cn("hover:text-primary", {
            "text-primary": pathname === headerPath.home,
          })}
        >
          {t("home")}
        </Link>

        <Link
          href={`/contact`}
          className={cn("hover:text-primary", {
            "text-primary": pathname === headerPath.contact,
          })}
        >
          {t("contact")}
        </Link>
      </div>

      <div className="absolute right-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer text-md justify-center">
            {locale === "en"
              ? isMobile
                ? "🇬🇧 EN"
                : "🇬🇧 English"
              : isMobile
              ? "🇻🇳 VN"
              : "🇻🇳 Vietnamese"}
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-neutral-950/60 border-none">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                changeLocale("en");
              }}
            >
              🇬🇧 English
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
