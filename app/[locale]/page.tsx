import { SteamIcon } from "@/public/SteamLogo";
import { About } from "@/src/component/About";
import { YoutubeIcon } from "lucide-react";
import { Footer } from "@/src/component/Footer";
import { cn } from "@/src/lib/utils";
import { iceCreamMan } from "@/public/styles/fonts";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className="home">
      <div className="relative">
        <div className={cn("mt-[-60px]", iceCreamMan.className)}>
          <img
            src="/header-image.jpg"
            alt="Background Image"
            className="w-screen h-screen object-cover "
          />
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <p className="text-6xl md:text-8xl text-[#e1c275]">
              {t("nameTitle1")}
            </p>
            <p className="text-4xl md:text-6xl text-[#e1c275]">
              {t("nameTitle2")}
            </p>
          </div>

          <div className="text-xl flex flex-col gap-4 absolute bottom-[60px] left-1/2 transform -translate-x-1/2">
            <button className="header-btn cursor-pointer flex gap-2 justify-center">
              <YoutubeIcon />
              {t("watchTrailer")}
            </button>

            <button className="header-btn cursor-pointer flex gap-2 justify-center">
              <SteamIcon className="w-6 h-6" />
              {t("playNow")}
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="wave-line-top-bottom absolute top-[-40px] right-0 left-0 bg-black h-[140px]" />
      </div>
      <About className="mt-[150px]" />

      <Footer className="" />
    </main>
  );
}
