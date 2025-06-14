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

  const backgroundShift = scrollY * 0.1;
  const smokeIntensity = Math.min(scrollY * 0.001, 0.8);
  const colorShift = Math.min(scrollY * 0.01, 100);

  return (
    <div 
      className="fixed inset-0 z-[-1] will-change-transform"
      style={{
        background: `
          radial-gradient(circle at ${50 + backgroundShift * 0.3}% ${30 + backgroundShift * 0.2}%, 
            hsla(140, 80%, ${8 + colorShift * 0.1}%, ${0.4 + smokeIntensity * 0.3}) 0%, 
            transparent 50%),
          radial-gradient(circle at ${20 - backgroundShift * 0.2}% ${70 + backgroundShift * 0.1}%, 
            hsla(160, 70%, ${12 + colorShift * 0.08}%, ${0.3 + smokeIntensity * 0.2}) 0%, 
            transparent 40%),
          radial-gradient(circle at ${80 + backgroundShift * 0.1}% ${20 - backgroundShift * 0.15}%, 
            hsla(120, 90%, ${6 + colorShift * 0.12}%, ${0.5 + smokeIntensity * 0.4}) 0%, 
            transparent 45%),
          linear-gradient(135deg, 
            hsl(140, 60%, ${3 + colorShift * 0.02}%) 0%, 
            hsl(140, 70%, ${5 + colorShift * 0.03}%) 20%,
            hsl(145, 75%, ${8 + colorShift * 0.04}%) 40%, 
            hsl(135, 80%, ${12 + colorShift * 0.05}%) 60%,
            hsl(140, 85%, ${18 + colorShift * 0.06}%) 80%,
            hsl(142, 90%, ${25 + colorShift * 0.08}%) 100%)
        `,
        transform: `translateY(${backgroundShift * 0.5}px)`,
        filter: `blur(${smokeIntensity * 2}px) brightness(${1 + smokeIntensity * 0.3})`,
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
