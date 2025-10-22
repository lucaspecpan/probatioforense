import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Perito from "./pages/Perito";
import Servicos from "./pages/Servicos";
import Metodologia from "./pages/Metodologia";
import Casos from "./pages/Casos";
import Credenciais from "./pages/Credenciais";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/perito" element={<Perito />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/credenciais" element={<Credenciais />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/artigos/:slug" element={<Article />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
