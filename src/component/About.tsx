import { openSans } from "@/public/styles/fonts";

export function About({ className }: { className?: string }) {
  return (
    <div className={`px-6 md:px-16 ${className}`}>
      <div className="text-5xl text-center">About our game</div>
      <div className={`${openSans.className} pt-10 text-xl`}>
        <div>
          Legends of Dai Viet: Two Emperors invites you into the Vietnamese
          underworld of departed souls beyond mortal existence. Inspired by a
          turning point in Vietnam’s history, the 13th-century Lý–Trần dynastic
          transition, it blends poetic storytelling steeped in Vietnamese
          culture. As a wayward unknown seeking reincarnation, you must undergo
          spiritual trials to transcend worldly attachments, challenge the Viet
          ancient heroes and the spiritual wisdom of Vietnam’s traditions. Along
          the way, you’ll explore quests and relics drawn from folklore,
          encountering legendary dragons, emperors, and spirits that bring
          Vietnam’s mythic past to life.
        </div>

        <div className="pt-10">
          At the heart of this journey is a deep Ngũ Hành (Five Elements) system
          that shapes every battle, build, and boss. There are no traditional
          level-ups. Instead, power comes from understanding your build and
          mastering the five elements. This elemental combat design rewards
          creative builds and skilful counterplay. Your foes, which include
          towering bosses from legend, wield the same elemental forces of Wood,
          Fire, Earth, Metal, and Water as you, turning each encounter into a
          test of strategy and adaptation. Legends of Dai Viet: Two Emperors
          carries a passionate indie spirit, striving to expand Vietnamese
          identity on the global stage by delivering an experience of elegant
          challenge, cultural depth, and profound meaning.
        </div>
      </div>
    </div>
  );
}
