import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  size: z.string().trim().max(60),
  message: z.string().trim().max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

  if (sent) {
    return (
      <div className="rounded-xl border border-primary/40 bg-card p-8 text-center">
        <h3 className="text-2xl text-primary">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A build specialist will reach out within one business day with your free quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="sr-only">
            Name
          </label>
          <input id="qf-name" name="name" placeholder="Full name" className={field} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="qf-phone" className="sr-only">
            Phone
          </label>
          <input id="qf-phone" name="phone" placeholder="Phone" className={field} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="qf-email" className="sr-only">
          Email
        </label>
        <input id="qf-email" name="email" placeholder="Email address" className={field} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="qf-size" className="sr-only">
          Building size
        </label>
        <input
          id="qf-size"
          name="size"
          placeholder="Building size (e.g. 40x60x14)"
          className={field}
        />
      </div>
      {!compact && (
        <div>
          <label htmlFor="qf-message" className="sr-only">
            Project details
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            placeholder="Tell us about your project — use, site, timeline"
            className={field}
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-gradient-brand w-full rounded-md px-5 py-3 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
      >
        Request Free Quote
      </button>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        No obligation. No pushy sales calls. Just straight numbers on your build.
      </p>
    </form>
  );
}