import { ComingSoon } from "@/src/component/ComingSoon";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("home");
  return <ComingSoon />;
}
