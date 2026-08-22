import HomeServicePanels from "@/components/HomeServicePanels";
import Footer from "@/components/Footer";
import { getLocalizedMetadata } from "@/i18n/metadata";

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'home' });
}

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100svh-116px)] min-[860px]:h-[calc(100svh-116px)] min-[860px]:overflow-hidden">
      <div className="flex flex-col min-[860px]:flex-row min-[860px]:flex-1 min-[860px]:overflow-hidden w-full relative">
        <HomeServicePanels lang="tr" />
      </div>
      <Footer lang="tr" />
    </div>
  );
}
