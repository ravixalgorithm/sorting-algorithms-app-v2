import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import { Header } from "./components/Header";
import { Controls } from "./components/Controls";
import { useStore } from "./store";
import { MobileSettings } from "./components/MobileSettings";
import { MobileAlgorithmSelector } from "./components/MobileAlgorithmSelector";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Separator } from "./components/ui/separator";
import { MobileHeader } from "./components/MobileHeader";
import { DarkModeProvider } from './context/DarkModeContext.js'
function App() {
  const { setIsMobile, setSize } = useStore();

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(isMobile);
    if (isMobile) {
      setSize(20);
    }
  }, [isMobile, setIsMobile, setSize]);

  return (
    <div className="flex h-dvh bg-background text-foreground">
      <Sidebar />
      <main className="flex flex-col w-full h-full gap-4 p-8 lg:container lg:max-w-7xl lg:gap-10 lg:p-10">
        <MobileHeader />
        <div className="flex-col hidden gap-10 md:flex">
          <Header />
          <Separator />
        </div>
        <MobileSettings />
        <AlgorithmVisualizer />
        <MobileAlgorithmSelector />
        <Controls />
      </main>
    </div>
  );
}

export default App;
