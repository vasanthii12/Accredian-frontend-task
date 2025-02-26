import { FileText, Wallet, Gift } from "lucide-react";

export function BenefitsSection() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground">
            How Do I <span className="text-primary">Refer</span>?
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="relative group">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Submit Referrals</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Submit referrals easily via our website's referral section.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Earn Rewards</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Earn rewards once your referral joins an Accredian program.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Receive Bonus</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Referrer receives a bonus 30 days after program enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
