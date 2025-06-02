import GetInTouch from "@/components/Page/Public/Details/ContactUs/GetInTouch";
import Hero from "@/components/Page/Public/Details/ContactUs/Hero";
import LetsTalk from "@/components/Page/Public/Details/ContactUs/LetsTalk";
import { Contact } from "@/components/Page/Public/Index/Contact";
import { FAQ } from "@/components/Page/Public/Index/FAQ";

export default function ContactUs() {
  return (
    <div className="bg-white">
      <Hero />
      <GetInTouch />
      <LetsTalk />
      <FAQ />
      <Contact />
    </div>
  );
}
