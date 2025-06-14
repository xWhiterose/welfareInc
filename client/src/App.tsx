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
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundShift = scrollY * 0.1;
  const smokeIntensity = Math.min(scrollY * 0.0005, 0.8);

  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        background: `
          radial-gradient(ellipse ${600 + backgroundShift}px ${400 + backgroundShift * 0.8}px at ${20 + backgroundShift * 0.02}% ${10 + backgroundShift * 0.01}%, hsl(300, 70%, ${35 - smokeIntensity * 10}%) 0%, transparent 50%),
          radial-gradient(ellipse ${500 + backgroundShift * 0.8}px ${350 + backgroundShift * 0.6}px at ${80 - backgroundShift * 0.015}% ${15 + backgroundShift * 0.02}%, hsl(280, 80%, ${25 - smokeIntensity * 8}%) 0%, transparent 50%),
          radial-gradient(ellipse ${700 + backgroundShift * 1.2}px ${300 + backgroundShift * 0.4}px at ${15 + backgroundShift * 0.01}% ${85 - backgroundShift * 0.02}%, hsl(260, 60%, ${15 - smokeIntensity * 5}%) 0%, transparent 50%),
          radial-gradient(ellipse ${400 + backgroundShift * 0.6}px ${500 + backgroundShift}px at ${85 - backgroundShift * 0.01}% ${90 - backgroundShift * 0.015}%, hsl(240, 50%, ${8 - smokeIntensity * 3}%) 0%, transparent 50%),
          linear-gradient(${135 + backgroundShift * 0.05}deg, hsl(240, 50%, ${8 - smokeIntensity * 3}%) 0%, hsl(260, 60%, ${15 - smokeIntensity * 5}%) 40%, hsl(280, 80%, ${25 - smokeIntensity * 8}%) 80%, hsl(300, 70%, ${35 - smokeIntensity * 10}%) 100%)
        `,
        transform: `translateY(${backgroundShift * 0.5}px)`,
        transition: 'transform 0.1s ease-out'
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
