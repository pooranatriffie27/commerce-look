import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const ProductSpecs = () => {
  return (
    <Tabs defaultValue="features" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="specs">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      
      <TabsContent value="features" className="mt-6">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Active Noise Cancellation</h3>
              <p className="text-muted-foreground">
                Industry-leading ANC technology blocks out external noise for an immersive listening experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Premium Audio Quality</h3>
              <p className="text-muted-foreground">
                40mm drivers deliver rich, balanced sound with deep bass and crystal-clear highs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">All-Day Comfort</h3>
              <p className="text-muted-foreground">
                Memory foam ear cushions and adjustable headband ensure comfortable wear for extended periods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Long Battery Life</h3>
              <p className="text-muted-foreground">
                Up to 30 hours of playtime on a single charge, with quick charging support.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="specs" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <dl className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Driver Size</dt>
                <dd className="font-medium">40mm</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Frequency Response</dt>
                <dd className="font-medium">20Hz - 20kHz</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Impedance</dt>
                <dd className="font-medium">32 Ohm</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Bluetooth Version</dt>
                <dd className="font-medium">5.3</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Battery Life</dt>
                <dd className="font-medium">30 hours</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-muted-foreground">Charging Time</dt>
                <dd className="font-medium">2 hours</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-muted-foreground">Weight</dt>
                <dd className="font-medium">250g</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="reviews" className="mt-6">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Amazing sound quality!</span>
                <span className="text-sm text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Best headphones I've ever owned. The noise cancellation is incredible and the battery lasts forever.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Very comfortable</span>
                <span className="text-sm text-muted-foreground">1 week ago</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Can wear these all day without any discomfort. Worth every penny!
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
