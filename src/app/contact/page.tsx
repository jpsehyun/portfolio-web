// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgqywye";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      // optional metadata
      _subject: "Portfolio Contact",
      _page: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks! Your message has been sent.");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          j?.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:max-w-xl">
        {/* Honeypot to reduce spam (bots fill hidden fields) */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <Input name="name" placeholder="Your name" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          minLength={10}
        />

        <div className="flex items-center gap-3">
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-fit px-6 py-2 rounded-lg font-medium border border-black
                      bg-white text-black shadow-inner
                      transition-all duration-500 ease-in-out
                      hover:bg-black hover:text-white hover:shadow-lg
                      hover:tracking-wide
                      focus:outline-none focus:ring-2 focus:ring-black"
          >
            {status === "loading" ? "Sending…" : "Send"}
          </Button>

          {status === "success" && (
            <span className="text-sm text-emerald-400">{message}</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-400">{message}</span>
          )}
        </div>

        <p className="text-xs text-neutral-500">
          Your info is sent securely via Formspree. I’ll get back to you soon.
        </p>
      </form>
    </section>
  );
}
