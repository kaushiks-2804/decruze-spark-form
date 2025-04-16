
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ProjectRequest from "./pages/ProjectRequest";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project-request" element={<ProjectRequest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
