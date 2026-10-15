import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [code, setCode] = useState("");

  return (
    <section aria-labelledby="newsletter-title" className="bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase">The HIKE newsletter</p>
          <h2 id="newsletter-title" className="headline-lg mt-3 text-4xl sm:text-5xl">
            Sign up.
            <br />
            Get 15% off.
          </h2>
          <p className="mt-4 max-w-md text-base">
            Enter your email for 15% off, fresh gear and news from the trail.
          </p>
        </div>
        {code ? (
          <div role="status" className="space-y-3">
            <p className="flex items-center gap-2 font-semibold">
              <Check className="size-5" /> Your demo code is ready!
            </p>
            <p>Sample 15% discount code (demo only):</p>
            <p className="font-display text-4xl font-bold">{code}</p>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setCode("HIKE15");
            }}
          >
            <label htmlFor="newsletter-email" className="text-sm font-semibold">
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"

                aria-describedby="newsletter-note"
                className="h-12 min-w-0 shrink-0 rounded-full border border-accent-foreground/20 bg-background px-5 text-foreground outline-none focus:ring-2 focus:ring-foreground sm:flex-1"
              />
              <Button
                type="submit"

                className="h-12 rounded-full px-6 font-semibold"
              >
                Get 15% off <ArrowRight />
              </Button>
            </div>
            <p id="newsletter-note" className="mt-3 text-xs text-accent-foreground/75">
              Portfolio demo — no email is sent or stored.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
