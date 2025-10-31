import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">AUDIO</h1>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Products</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-16">
          <ProductGallery />
          <ProductDetails />
        </div>

        <ProductSpecs />
        <RelatedProducts />
      </main>

      <footer className="border-t mt-16">
        <div className="container px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 AUDIO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
