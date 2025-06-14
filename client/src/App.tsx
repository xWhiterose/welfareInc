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
          radial-gradient(ellipse 80% 50% at 20% 10%, hsl(140, 80%, ${20 - smokeIntensity * 5}%) 0%, transparent 70%),
          radial-gradient(ellipse 70% 60% at 80% 90%, hsl(140, 70%, ${12 - smokeIntensity * 3}%) 0%, transparent 60%),
          radial-gradient(ellipse 90% 40% at 60% 30%, hsl(0, 0%, ${5 + smokeIntensity * 2}%) 0%, transparent 50%),
          linear-gradient(${135 + backgroundShift * 0.02}deg, 
            hsl(140, 60%, ${3 + smokeIntensity * 2}%) 0%, 
            hsl(140, 80%, ${8 + smokeIntensity * 3}%) 25%, 
            hsl(140, 90%, ${15 + smokeIntensity * 5}%) 50%, 
            hsl(140, 100%, ${25 + smokeIntensity * 8}%) 75%, 
            hsl(140, 100%, ${35 + smokeIntensity * 10}%) 100%)
        `,
        transform: `translateY(${backgroundShift * 0.3}px) scale(${1 + smokeIntensity * 0.1})`,
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
