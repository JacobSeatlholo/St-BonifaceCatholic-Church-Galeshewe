import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Welcome } from "@/components/site/welcome";
import { Story } from "@/components/site/story";
import { Patron } from "@/components/site/patron";
import { MosaicBand } from "@/components/site/mosaic-band";
import { Worship } from "@/components/site/worship";
import { Centenary } from "@/components/site/centenary";
import { Community } from "@/components/site/community";
import { Gallery } from "@/components/site/gallery";
import { Visit } from "@/components/site/visit";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-parchment text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Story />
        <Patron />
        <MosaicBand />
        <Worship />
        <Centenary />
        <Community />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
