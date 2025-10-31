import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const relatedProducts = [
  { id: 1, name: "Wireless Earbuds", price: "$149", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" },
  { id: 2, name: "Charging Case", price: "$49", image: "https://images.unsplash.com/photo-1625005834625-f6c3e6c06f6a?w=400&h=400&fit=crop" },
  { id: 3, name: "Premium Cable", price: "$29", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop" },
  { id: 4, name: "Carrying Bag", price: "$39", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
];

export const RelatedProducts = () => {
  return (
    <div className="py-16">
      <h2 className="mb-8 text-3xl font-bold">You May Also Like</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="mb-1 font-semibold">{product.name}</h3>
              <p className="mb-3 text-lg font-bold text-primary">{product.price}</p>
              <Button size="sm" className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
