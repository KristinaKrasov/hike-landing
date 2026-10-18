import { ArrowRight, Mountain, Truck, ShieldCheck, Percent } from "lucide-react";

import { Newsletter } from "@/components/newsletter";

import heroImg from "@/assets/hero.jpg";
import setImg from "@/assets/product-set.jpg";

import { products } from "@/data/products";

const promos = [
  {
    icon: Percent,
    title: "20% off your second pair",
    text: "Add two pairs to your basket — the discount applies automatically.",
  },
  {
    icon: Truck,
    title: "Free delivery on orders over $100",
    text: "Nationwide delivery to pickup points or straight to your door.",
  },
  {
    icon: ShieldCheck,
    title: "30-day exchanges",
    text: "Not the right size or colour? Exchange it, no questions asked.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Promo ticker */}
      <div className="overflow-hidden bg-accent py-2">
        <div className="flex w-max animate-marquee gap-12 text-xs font-semibold tracking-widest text-accent-foreground uppercase">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12" aria-hidden={dup === 1}>
              {[
                "New SS26 collection",
                "20% off your second pair",
                "Free delivery on orders over $100",
                "30-day exchanges",
                "New SS26 collection",
                "20% off your second pair",
                "Free delivery on orders over $100",
                "30-day exchanges",
              ].map((text, i) => (
                <span key={i} className="flex items-center gap-3">
                  <Mountain className="size-3.5" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="headline-lg text-2xl">
            HIKE<span className="text-accent">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#catalog"
              className="hidden transition-colors hover:text-muted-foreground sm:block"
            >
              Shop
            </a>
            <a
              href="#promos"
              className="hidden transition-colors hover:text-muted-foreground sm:block"
            >
              Offers
            </a>
            <a
              href="/about"
              className="hidden transition-colors hover:text-muted-foreground sm:block"
            >
              About us
            </a>
            <a
              href="/contacts"
              className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-transform hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-graphite">
        <img
          src={heroImg}
          alt="Hiker in HIKE outdoor gear on a mountain ridge at sunrise"
          width={1920}
          height={1088}
          className="block h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-graphite/80 via-graphite/20 to-transparent md:block" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-10 md:absolute md:inset-0 md:flex md:items-center md:py-6">
          <div className="md:ml-auto md:w-1/2 md:pl-4">
            <p className="animate-rise-in text-sm font-semibold tracking-widest text-accent uppercase">
              SS26 collection
            </p>
            <h1
              className="headline-xl mt-3 max-w-3xl animate-rise-in text-4xl text-graphite-foreground sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl"
              style={{ animationDelay: "0.1s" }}
            >
              Built for trails. Ready for the city.
            </h1>
            <p
              className="mt-4 max-w-xl animate-rise-in text-base text-graphite-foreground/80 sm:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              HIKE technical clothing and footwear stand up to rain, rocky trails and thousands of
              miles — and look good doing it.
            </p>
            <div className="mt-6 animate-rise-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Explore the collection
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="headline-lg text-3xl sm:text-4xl">Shop</h2>
          <span className="text-sm text-muted-foreground">Season favourites</span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  loading="lazy"
                  className="aspect-square w-full object-contain"
                />
                <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {product.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{product.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite/80">
                  Add to basket
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="bg-graphite py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="headline-lg text-3xl text-graphite-foreground sm:text-4xl">
            Offers & benefits
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {promos.map((promo) => (
              <div
                key={promo.title}
                className="rounded-2xl border border-graphite-foreground/10 bg-graphite-foreground/5 p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-accent">
                  <promo.icon className="size-5 text-accent-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-graphite-foreground">
                  {promo.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-foreground/70">{promo.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 rounded-3xl bg-secondary p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="headline-lg text-3xl sm:text-4xl">We walk the trails ourselves</h2>
            <p className="mt-4 text-muted-foreground">
              HIKE is a team of hikers who test every design on real routes, from Karelia to the
              Altai mountains. Our gear performs where it matters most.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
            >
              More about HIKE
              <ArrowRight className="size-4" />
            </a>
          </div>
          <img
            src={setImg}
            alt="HIKE outdoor set: fleece, trousers and backpack"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
        </div>
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
