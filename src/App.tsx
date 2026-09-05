import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { ReviewsProvider } from "@/contexts/ReviewsContext";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Professionals = lazy(() => import("./pages/Professionals"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminReviews = lazy(() => import("./pages/AdminReviews"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CartProvider>
        <ReviewsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/professionals" element={<Professionals />} />
                  <Route path="/admin-reviews" element={<AdminReviews />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </ReviewsProvider>
      </CartProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

