import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ReferForm } from "@/components/refer-form";
import { useState } from "react";

export default function Home() {
  const [showReferModal, setShowReferModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onReferClick={() => setShowReferModal(true)} />
      <BenefitsSection />
      <ReferForm open={showReferModal} onOpenChange={setShowReferModal} />
    </div>
  );
}