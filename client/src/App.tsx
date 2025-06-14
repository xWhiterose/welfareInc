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

  const gradientShift = Math.sin(scrollY * 0.001) * 10;
  const colorIntensity = Math.min(scrollY * 0.0001, 0.3);

  return (
    <div 
      className="fixed inset-0 z-[-1] will-change-transform"
      style={{
        background: `
          radial-gradient(ellipse at ${50 + gradientShift}% ${30 + backgroundShift}%, 
            hsl(140, ${70 + colorIntensity * 100}%, ${8 + colorIntensity * 10}%) 0%, 
            transparent 50%),
          radial-gradient(ellipse at ${30 - gradientShift}% ${70 - backgroundShift}%, 
            hsl(160, ${60 + colorIntensity * 80}%, ${6 + colorIntensity * 8}%) 0%, 
            transparent 40%),
          linear-gradient(135deg, 
            hsl(140, 60%, ${3 + colorIntensity * 5}%) 0%, 
            hsl(140, 70%, ${8 + colorIntensity * 8}%) 30%, 
            hsl(145, 80%, ${12 + colorIntensity * 12}%) 60%, 
            hsl(150, 90%, ${18 + colorIntensity * 15}%) 100%)
        `,
        backgroundSize: '200% 200%, 150% 150%, 100% 100%',
        backgroundPosition: `${backgroundShift}% ${backgroundShift}%, ${-backgroundShift}% ${backgroundShift}%, 0% 0%`,
        animation: 'backgroundFlow 20s ease-in-out infinite alternate'
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
