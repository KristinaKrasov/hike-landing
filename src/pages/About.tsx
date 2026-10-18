import { ArrowLeft, Compass, Leaf, Users } from "lucide-react";


const values = [
  {
    icon: Compass,
    title: "Trail tested",
    text: "Every design is field tested from Karelia to Altai, in rain, snow and heat.",
  },
  {
    icon: Leaf,
    title: "Responsible production",
    text: "We use recycled fabrics and PFAS-free membranes wherever possible.",
  },
  {
    icon: Users,
    title: "Community",
    text: "We organise open hikes and gear testing events for everyone.",
  },
];

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

      <section className="bg-graphite py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="headline-lg text-3xl text-graphite-foreground sm:text-4xl">
            Our principles
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-graphite-foreground/10 bg-graphite-foreground/5 p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-accent">
                  <value.icon className="size-5 text-accent-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-graphite-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-foreground/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="headline-lg text-3xl sm:text-4xl">Ready for the trail?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Explore our collection of seasonal favourites and discounted outdoor sets.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Shop the collection
        </a>
      </section>
    </div>
  );
}
