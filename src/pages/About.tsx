import { ArrowLeft } from "lucide-react";
import { Newsletter } from "@/components/newsletter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="headline-lg text-2xl">
            HIKE<span className="text-accent">.</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          About us
        </p>
        <h1 className="headline-xl mt-3 max-w-3xl text-4xl sm:text-6xl">
          Gear made by people who hike
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          HIKE started in 2018 with a simple idea: make honest, technical clothing and footwear
          without charging extra for a logo. Today, we are a team of 40 hikers, designers and fabric
          specialists.
        </p>
        <img
          src="/images/hike-store.webp"
          alt="HIKE outdoor clothing and footwear store with mountain views"
          width={1312}
          height={1199}
          loading="lazy"
          className="mt-10 h-auto w-full rounded-3xl"
        />
      </section>

      <Newsletter />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="headline-lg text-lg text-foreground">
            HIKE<span className="text-accent">.</span>
          </span>
          <p>© 2026 HIKE. Outdoor clothing & footwear.</p>
          <a href="/contacts" className="font-medium text-foreground hover:underline">
            Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
}
