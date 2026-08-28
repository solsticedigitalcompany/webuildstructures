import { createFileRoute } from "@tanstack/react-router";
import { Hammer, HardHat, ShieldCheck, Timer, Phone, MapPin, Mail } from "lucide-react";

import { QuoteForm } from "@/components/QuoteForm";
import heroBarn from "@/assets/hero-barn.jpg";
import crewFraming from "@/assets/crew-framing.jpg";
import concreteSlab from "@/assets/concrete-slab.jpg";
import finishedInterior from "@/assets/finished-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "We Build Structures | Turn-Key Post Frame Pole Barns" },
      {
        name: "description",
        content:
          "Custom post frame pole barns built foundation to ridge by in-house concrete and framing crews. Licensed, insured, fast turn-around. Get a free quote.",
      },
      { property: "og:title", content: "We Build Structures | Turn-Key Post Frame Pole Barns" },
      {
        property: "og:description",
        content:
          "Foundation to ridge, one crew, one price. Custom pole barns for storage, shops, homes and agriculture.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: HardHat,
    title: "Superior Customer Service",
    body: "One project lead from first call to final walkthrough. You always know what happens next.",
  },
  {
    icon: Hammer,
    title: "In-House Concrete Crew",
    body: "We pour our own slabs and set our own posts. No subs, no finger pointing, no delays.",
  },
  {
    icon: Timer,
    title: "Fast Turn-Around",
    body: "Most buildings go from dirt to done in weeks, not seasons. Your schedule drives ours.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Fully covered crews and engineered plans built to exceed local code every time.",
  },
];

const steps = [
  {
    n: "01",
    title: "Site & Slab",
    body: "We grade, form and pour a level, reinforced foundation sized for real equipment loads.",
    img: concreteSlab,
    alt: "Crew finishing a fresh concrete slab inside a new pole barn shell",
  },
  {
    n: "02",
    title: "Post & Frame",
    body: "Engineered posts, laminated columns and trusses set square, plumb and braced for decades.",
    img: crewFraming,
    alt: "Construction crew setting trusses on a post frame pole barn",
  },
  {
    n: "03",
    title: "Turn-Key Finish",
    body: "Steel, insulation, doors, wiring and trim, finished ready to back the truck in and get to work.",
    img: finishedInterior,
    alt: "Finished pole barn shop interior with polished concrete floor and workbench",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="text-xl leading-none font-black tracking-tight">
            <span className="block font-[family-name:var(--font-display)] text-primary">
              WE BUILD
            </span>
            <span className="text-gradient-brand block font-[family-name:var(--font-display)]">
              STRUCTURES
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold tracking-widest uppercase md:flex">
            <a href="#process" className="hover:text-primary">
              Our Process
            </a>
            <a href="#why" className="hover:text-primary">
              Why Us
            </a>
            <a href="#repairs" className="hover:text-primary">
              Repairs
            </a>
            <a href="#quote" className="text-primary">
              Get A Quote
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroBarn}
          alt="Custom black post frame pole barn at dusk with lit interior"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28 lg:pb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Post Frame Specialists
            </p>
            <h1 className="mt-3 text-5xl leading-[0.92] sm:text-6xl lg:text-6xl">
              Let&apos;s get going on your <span className="text-gradient-brand">pole barn</span>{" "}
              today
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From the foundation to the ridge, we build turn-key post frame structures with our own
              crews. Storage, shops, barndominiums and agricultural buildings engineered to outlast
              the mortgage — and priced honestly before a single post goes in the ground.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <a
                href="#quote"
                className="bg-gradient-brand rounded-md px-7 py-3.5 text-sm font-bold tracking-widest text-primary-foreground uppercase shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Request Free Quote
              </a>
              <a
                href="tel:+15555551234"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-primary"
              >
                <Phone className="size-4" /> (555) 555-1234
              </a>
            </div>
            <dl className="mt-6 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-5">
              {[
                ["450+", "Buildings raised"],
                ["12", "Years in the field"],
                ["100%", "In-house crews"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-[family-name:var(--font-display)] text-3xl text-primary">
                    {stat}
                  </dt>
                  <dd className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            id="quote"
            className="scroll-mt-24 self-start rounded-2xl border border-border bg-card/95 p-5 shadow-[var(--shadow-hard)] backdrop-blur lg:mt-0"
          >
            <h2 className="text-2xl">Get your free quote</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us what you want to build. We answer with a real number, a real timeline and a
              crew that shows up.
            </p>
            <div className="mt-5">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Who we are</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">The We Build Structures standard</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We Build Structures is your expert post frame erector. We specialize in turn-key,
              ready-to-use buildings and take the stress out of the entire project — permits,
              concrete, framing, steel and finish work under one roof.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="bg-gradient-brand inline-flex size-11 items-center justify-center rounded-lg">
                  <Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl sm:text-5xl">Foundation to ridge, one crew</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Three phases, zero handoffs. Same people on your site from the first stake to the final
            trim screw.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="group">
                <div className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-accent">
                  {s.n}
                </p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="repairs" className="border-y border-border bg-surface py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">
              Need repairs? <span className="text-gradient-brand">We got you.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sagging trusses, rotted posts, wind-torn steel or a slab that never sat right — our
              repair crews rebuild existing buildings to look and function like new, usually in a
              matter of days.
            </p>
            <a
              href="#quote"
              className="mt-8 inline-block rounded-md border border-primary px-7 py-3.5 text-sm font-bold tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Talk to a repair crew
            </a>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Post & column replacement",
              "Roof and steel re-skins",
              "Slab repair & extensions",
              "Door and opening retrofits",
              "Insulation & liner packages",
              "Storm damage restoration",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl text-primary">
                WE BUILD STRUCTURES
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Turn-key post frame buildings for storage, housing and agriculture.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> (555) 555-1234
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> build@webuildstructures.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Serving the Midwest & surrounding states
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-bold tracking-widest text-foreground uppercase">Hours</p>
              <p className="mt-2">Mon–Fri 7:00a – 5:30p</p>
              <p>Sat by appointment</p>
            </div>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} We Build Structures. All rights reserved. Licensed &
            insured post frame contractor.
          </p>
        </div>
      </footer>
    </div>
  );
}
