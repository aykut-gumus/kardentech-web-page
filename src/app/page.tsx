import HomeServicePanels from "@/components/HomeServicePanels";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-[calc(100svh-116px)] lg:h-[calc(100svh-116px)] lg:overflow-hidden">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden w-full">
        <HomeServicePanels />
      </div>
      <Footer />
    </div>
  );
}
