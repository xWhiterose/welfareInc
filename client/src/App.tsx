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
        background: `linear-gradient(135deg, 
          hsl(140, 60%, ${3 + smokeIntensity * 2}%) 0%, 
          hsl(140, 70%, ${8 + smokeIntensity * 3}%) 30%, 
          hsl(140, 80%, ${15 + smokeIntensity * 4}%) 60%, 
          hsl(140, 90%, ${25 + smokeIntensity * 6}%) 100%)`,
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
