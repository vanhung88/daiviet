import { openSans } from "@/public/styles/fonts";

export function Header() {
  return (
    <header className="sticky top-0 right-0 w-full z-10 left-0 h-[60px] flex gap-8 px-10 text-xl items-center justify-center bg-neutral-600/30">
      <div className={openSans.className}>Home</div>
      <div className={openSans.className}>Contract</div>
      <div className={openSans.className}>News</div>
    </header>
  );
}
