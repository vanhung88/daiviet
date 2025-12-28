export function Footer({ className }: { className?: string }) {
  return (
    <div className="mt-16">
      <div className="wave-line-top bg-neutral-50 h-[60px]" />
      <footer
        className={`bg-neutral-50 py-10 px-10 text-neutral-950 flex justify-center ${className}`}
      >
        <p className="text-neutral-950">
          © All Rights Reserved Legend of Dai Viet 2025
        </p>
      </footer>
    </div>
  );
}
