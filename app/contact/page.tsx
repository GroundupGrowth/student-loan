import { Mail, MapPin, Phone } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { ContactForm } from "@/components/site/contact-form";
import {
  EMAIL,
  GOOGLE_MAPS_EMBED,
  OFFICE_ADDRESS,
  PHONE,
  PHONE_DISPLAY,
} from "@/lib/config";

export const metadata = {
  title: "Contact us",
  description:
    "Reach the ClearPath team by phone, email, or message. We respond to every inquiry within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 text-balance">Reach the team.</h1>
            <p className="mt-5 text-body text-[var(--slate)]">
              Call us, email us, or send a message below. We respond to every
              inquiry within one business day.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Details */}
            <div className="space-y-6">
              <div className="card-base p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--cream)]">
                    <Phone
                      className="h-4 w-4 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h2 className="font-serif text-[18px] text-[var(--navy)]">
                      Phone
                    </h2>
                    <a
                      href={`tel:${PHONE}`}
                      className="mt-1 inline-block text-[15px] text-[var(--ink)] underline-gold"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="mt-1 text-[13px] text-[var(--slate)]">
                      Mon–Fri, 9am–6pm local time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--cream)]">
                    <Mail
                      className="h-4 w-4 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h2 className="font-serif text-[18px] text-[var(--navy)]">
                      Email
                    </h2>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 inline-block text-[15px] text-[var(--ink)] underline-gold"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-base p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--cream)]">
                    <MapPin
                      className="h-4 w-4 text-[var(--navy)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h2 className="font-serif text-[18px] text-[var(--navy)]">
                      Office
                    </h2>
                    <address className="mt-1 not-italic text-[15px] text-[var(--ink)]">
                      {OFFICE_ADDRESS}
                    </address>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--cream)]">
                {/*
                  Google Maps embed slot. Replace this placeholder with an
                  <iframe src={GOOGLE_MAPS_EMBED} ... /> once the embed URL is
                  available in /lib/config.ts.
                */}
                <div className="flex aspect-[16/9] items-center justify-center p-6 text-center">
                  <div>
                    <p className="text-[13px] uppercase tracking-[0.16em] text-[var(--slate)]">
                      Placeholder
                    </p>
                    <p className="mt-2 font-serif text-[18px] text-[var(--navy)]">
                      Google Maps embed
                    </p>
                    <p className="mt-1 text-[13px] text-[var(--slate)]">
                      Replace with iframe using <code>GOOGLE_MAPS_EMBED</code>
                      {" "}from <code>/lib/config.ts</code> ({GOOGLE_MAPS_EMBED}).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-base p-7 md:p-10">
              <h2 className="font-serif text-[24px] text-[var(--navy)]">
                Send us a message.
              </h2>
              <p className="mt-2 text-[15px] text-[var(--slate)]">
                A real person will read it and reply within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
