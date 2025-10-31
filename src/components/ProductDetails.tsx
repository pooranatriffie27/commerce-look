import { useState } from "react";
import { Star, Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const sizes = ["S", "M", "L", "XL"];
const colors = [
  { name: "Black", class: "bg-gray-900" },
  { name: "Silver", class: "bg-gray-300" },
  { name: "Gold", class: "bg-amber-400" },
];

export const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${quantity}x Premium Wireless Headphones - ${selectedColor}, Size ${selectedSize}`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Badge className="mb-3">New Arrival</Badge>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Premium Wireless Headphones</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
        <p className="text-3xl font-bold">$299.00</p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 
        30-hour battery life, and premium materials for all-day comfort.
      </p>

      <div className="space-y-4">
        <div>
          <label className="mb-3 block text-sm font-medium">Size</label>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                className="w-14"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">Color</label>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`h-10 w-10 rounded-full border-2 transition-all ${
                  selectedColor === color.name
                    ? "border-primary scale-110"
                    : "border-border hover:scale-105"
                } ${color.class}`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">Quantity</label>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-lg font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button className="flex-1" size="lg" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline" size="lg">
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      <div className="rounded-lg border bg-muted/30 p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Free shipping</span>
          <span className="font-medium">On orders over $100</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery</span>
          <span className="font-medium">2-4 business days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Returns</span>
          <span className="font-medium">30-day return policy</span>
        </div>
      </div>
    </div>
  );
};
