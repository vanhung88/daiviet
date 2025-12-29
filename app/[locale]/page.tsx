import { About } from "@/src/component/About";
import { Footer } from "@/src/component/Footer";
import { useTranslations } from "next-intl";
import { Header } from "@/src/component/Header";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className="home">
      <Header />
      <div className="relative">
        <div className="wave-line-top-bottom absolute top-[-40px] right-0 left-0 bg-black h-[140px]" />
      </div>
      <About className="mt-[150px]" />

      <Footer />
    </main>
  );
}
