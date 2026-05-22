"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_FORM_ENDPOINT } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: Values) => {
    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Contact form failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[var(--line)] bg-[var(--cream)] p-6"
      >
        <h3 className="font-serif text-[22px] text-[var(--navy)]">Thanks — we got it.</h3>
        <p className="mt-2 text-[15px] text-[var(--slate)]">
          A member of the team will reach out within one business day. If your
          question is time-sensitive, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5" aria-describedby={status === "error" ? "contact-error" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-[13px] text-[#B42318]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-[13px] text-[#B42318]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-phone">Phone</Label>
        <Input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          aria-invalid={errors.phone ? "true" : undefined}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="contact-phone-error" className="text-[13px] text-[#B42318]">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          placeholder="A few sentences on your situation. Don't worry about the perfect description — we'll fill in the blanks on the call."
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-[13px] text-[#B42318]">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="button"
        onClick={handleSubmit(onSubmit)}
        disabled={status === "submitting"}
        size="lg"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      {status === "error" && (
        <p id="contact-error" className="text-[14px] text-[#B42318]">
          Something went wrong on our end. Please try again, or call us directly.
        </p>
      )}
    </div>
  );
}
