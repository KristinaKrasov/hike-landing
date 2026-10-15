import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Phone, label: "Phone", value: "8 800 000-00-00", note: "Daily, 9 am–9 pm" },
  { icon: Mail, label: "Email", value: "hello@hike.example", note: "We reply within a day" },
  {
    icon: MapPin,
    label: "Showroom",
    value: "12 Example Street, Moscow",
    note: "Mon–Sat, 10 am–8 pm",
  },
];

export default function Contacts() {
  const [sent, setSent] = useState(false);

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
          Contact
        </p>
        <h1 className="headline-xl mt-3 text-4xl sm:text-6xl">Let's talk</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
                  <channel.icon className="size-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {channel.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">{channel.value}</p>
                  <p className="text-sm text-muted-foreground">{channel.note}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-xl font-semibold">Send us a message</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Portfolio demo — no message will be sent.
            </p>
            {sent && (
              <p role="status" className="mt-3 text-sm">
                Thanks! This is a demo. Your message was not sent or stored.
              </p>
            )}
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  maxLength={254}
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={2000}
                  required
                  rows={4}
                  placeholder="Ask about an order, sizing or a partnership"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button
                type="submit"
                disabled={sent}
                className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {sent ? "Demo complete" : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
