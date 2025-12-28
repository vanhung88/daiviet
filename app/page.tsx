import { SteamIcon } from "@/public/SteamLogo";
import { About } from "@/src/component/About";
import { Header } from "@/src/component/Header";
import { YoutubeIcon } from "lucide-react";
import { Footer } from "@/src/component/Footer";

export default function Home() {
  return (
    <main className="home">
      <div className="relative">
        <Header />
        <div className="mt-[-60px]">
          <img
            src="/header-image.jpg"
            alt="Background Image"
            className="w-screen h-screen object-cover "
          />
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <h1 className="text-6xl md:text-8xl text-[#e1c275]">
              Legend of Dai Viet
            </h1>
            <p className="text-4xl md:text-6xl text-[#e1c275]">Two Emperors</p>
          </div>

          <div className="text-xl flex flex-col gap-4 absolute bottom-[60px] left-1/2 transform -translate-x-1/2">
            <button className="header-btn cursor-pointer flex gap-2 justify-center">
              <YoutubeIcon />
              Watch Trailer
            </button>

            <button className="header-btn cursor-pointer flex gap-2 justify-center">
              <SteamIcon className="w-6 h-6" />
              Play Now
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
