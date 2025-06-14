import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function DynamicBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundShift = scrollY * 0.05;
  const smokeIntensity = Math.min(scrollY * 0.0003, 0.6);

  return (
    <div 
      className="fixed inset-0 z-[-1] will-change-transform"
      style={{
        background: `
          radial-gradient(ellipse 150% 100% at ${15 + backgroundShift * 0.02}% ${5 + backgroundShift * 0.015}%, hsl(140, 80%, ${22 - smokeIntensity * 4}%) 0%, transparent 85%),
          radial-gradient(ellipse 120% 110% at ${85 - backgroundShift * 0.015}% ${95 - backgroundShift * 0.02}%, hsl(140, 70%, ${15 - smokeIntensity * 3}%) 0%, transparent 80%),
          radial-gradient(ellipse 180% 80% at ${50 + backgroundShift * 0.01}% ${40 + backgroundShift * 0.018}%, hsl(0, 0%, ${4 + smokeIntensity * 1.5}%) 0%, transparent 75%),
          radial-gradient(ellipse 140% 120% at ${25 - backgroundShift * 0.008}% ${70 + backgroundShift * 0.012}%, hsl(140, 60%, ${8 - smokeIntensity * 2}%) 0%, transparent 70%),
          linear-gradient(${130 + backgroundShift * 0.03}deg, 
            hsl(140, 55%, ${3 + smokeIntensity * 1.2}%) 0%, 
            hsl(140, 65%, ${7 + smokeIntensity * 2.5}%) 25%, 
            hsl(140, 75%, ${14 + smokeIntensity * 4}%) 50%, 
            hsl(140, 85%, ${22 + smokeIntensity * 6}%) 75%, 
            hsl(140, 95%, ${32 + smokeIntensity * 8}%) 100%)
        `,
        transform: `translateY(${backgroundShift * 0.4}px) scale(${1 + smokeIntensity * 0.05})`,
      }}
    />
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DynamicBackground />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
