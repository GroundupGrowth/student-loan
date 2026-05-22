import { Calendar, Clock, Phone, ShieldCheck } from "lucide-react";

import { CALENDLY_URL, PHONE, PHONE_DISPLAY } from "@/lib/config";

export const metadata = {
  title: "Book your free consultation",
  description:
    "Book a free 30-minute consultation with a licensed ClearPath strategist. Walk away with a clear next step for your student loans, credit, and long-term plan.",
};

const expectations = [
  {
    icon: Clock,
    title: "30 minutes, scheduled at your convenience",
    description:
      "Mornings, evenings, and weekends are available. The call is run by a strategist, not a salesperson.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, no hard sell",
    description:
      "If the work isn't right for you, we'll tell you. Most calls end with a concrete next step you can take on your own.",
  },
  {
    icon: Calendar,
    title: "A written plan in your inbox",
    description:
      "After the call, we follow up with a summary of what we discussed, what we'd recommend, and what it would cost — in writing.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Free consultation</span>
            <h1 className="mt-4 text-balance">Book your free consultation.</h1>
            <p className="mt-5 text-body text-[var(--slate)]">
              30 minutes with a licensed strategist. No pressure, no obligation,
              and you&apos;ll leave with a written plan — whether you hire us
              or not.
            </p>
          </div>

          {/* Calendly embed slot */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div
              className="rounded-xl border border-dashed border-[var(--gold)]/60 bg-[var(--cream)] p-6 md:p-10"
              aria-label="Calendly scheduler embed location"
            >
              {/*
                Embed Calendly iframe here. URL: {{CALENDLY_URL}}

                Replace this block with the Calendly inline widget. Example:

                <div
                  className="calendly-inline-widget"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: 320, height: 700 }}
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
              */}
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <p className="text-[13px] uppercase tracking-[0.16em] text-[var(--slate)]">
                  Placeholder
                </p>
                <p className="mt-3 font-serif text-[24px] text-[var(--navy)]">
                  Calendly scheduler embeds here
                </p>
                <p className="mt-3 max-w-md text-[14px] text-[var(--slate)]">
                  Replace this block with the Calendly inline widget. The
                  destination URL lives in <code>/lib/config.ts</code> as{" "}
                  <code>CALENDLY_URL</code> (currently {CALENDLY_URL}).
                </p>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {expectations.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="card-base h-full p-7">
                  <Icon
                    className="h-6 w-6 text-[var(--gold)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 font-serif text-[20px] text-[var(--navy)]">
                    {e.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Phone fallback */}
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[var(--line)] bg-white p-6 text-center">
            <p className="text-[15px] text-[var(--slate)]">
              Prefer to talk to a human first?
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-2 inline-flex items-center gap-2 font-serif text-[24px] text-[var(--navy)] underline-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
