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
          radial-gradient(ellipse 120% 80% at ${20 + backgroundShift * 0.01}% ${10 + backgroundShift * 0.005}%, hsl(140, 70%, ${18 - smokeIntensity * 3}%) 0%, transparent 80%),
          radial-gradient(ellipse 100% 90% at ${80 - backgroundShift * 0.008}% ${90 - backgroundShift * 0.01}%, hsl(140, 60%, ${10 - smokeIntensity * 2}%) 0%, transparent 75%),
          radial-gradient(ellipse 150% 60% at ${60 + backgroundShift * 0.005}% ${50 + backgroundShift * 0.008}%, hsl(0, 0%, ${3 + smokeIntensity}%) 0%, transparent 70%),
          linear-gradient(${135 + backgroundShift * 0.01}deg, 
            hsl(140, 50%, ${2 + smokeIntensity}%) 0%, 
            hsl(140, 60%, ${6 + smokeIntensity * 2}%) 30%, 
            hsl(140, 70%, ${12 + smokeIntensity * 3}%) 60%, 
            hsl(140, 80%, ${20 + smokeIntensity * 4}%) 90%, 
            hsl(140, 90%, ${28 + smokeIntensity * 5}%) 100%)
        `,
        transform: `translateY(${backgroundShift * 0.2}px)`,
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
