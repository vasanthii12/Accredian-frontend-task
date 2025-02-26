import { Button } from "@/components/ui/button";
import { Gift, IndianRupee } from "lucide-react";

interface HeroSectionProps {
  onReferClick: () => void;
}

export function HeroSection({ onReferClick }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10">
      {/* Decorative money icons */}
      <div className="absolute -top-4 -left-4 text-primary/20">
        <IndianRupee size={80} />
      </div>
      <div className="absolute -bottom-4 -right-4 text-primary/20">
        <IndianRupee size={80} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Let's Learn</span>{" "}
                  <span className="block text-primary xl:inline">& Earn</span>
                </h1>
                <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-left">
                  Get a chance to win up to <span className="text-primary font-semibold">Rs. 15,000</span>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button
                      onClick={onReferClick}
                      size="lg"
                      className="w-full flex items-center gap-2"
                    >
                      <Gift className="h-5 w-5" />
                      Refer Now
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div className="hidden lg:block relative">
            <img
              src="/hero-image.png"
              alt="Students celebrating with mobile app"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}