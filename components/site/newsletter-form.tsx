"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NEWSLETTER_ENDPOINT } from "@/lib/config";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});
type Values = z.infer<typeof schema>;

export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const onSubmit = async (values: Values) => {
    setStatus("submitting");
    try {
      // Note: no <form action>; we POST via fetch to a configured endpoint.
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Newsletter signup failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-md border border-[var(--line)] bg-white px-3 py-2.5 text-[14px] text-[var(--ink)]"
      >
        You&apos;re in. We&apos;ll send one useful email a month, no spam.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          className="field"
          {...register("email")}
        />
        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={status === "submitting"}
        >
          Subscribe
        </Button>
      </div>
      {errors.email && (
        <p id="newsletter-error" className="mt-2 text-[13px] text-[#B42318]">
          {errors.email.message}
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-[13px] text-[#B42318]">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </div>
  );
}
