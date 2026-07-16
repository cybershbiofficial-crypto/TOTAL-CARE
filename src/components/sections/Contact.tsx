import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export function Contact({ cmsContent }: { cmsContent?: any[] }) {
  const contactData = cmsContent?.find((c) => c.id === "contact_info")?.content || {
    address: "Shaik Zayed Road Satwa",
    city: "Dubai · United Arab Emirates",
    email: "totalcares.official@gmail.com",
    phone: "+971 56 393 7512",
    hours: "Mon — Sat · 08:00 → 18:00 GST",
  };
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const property = formData.get("property") as string;
    const brief = formData.get("brief") as string;
    const scopes = formData.getAll("scope") as string[];

    if (!name || !email || !brief) {
      toast.error("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    const message = property ? `Location: ${property}\n\n${brief}` : brief;
    const service = scopes.length > 0 ? scopes.join(", ") : "General Inquiry";

    try {
      const { error } = await supabase.from("leads").insert({
        name,
        email,
        phone: phone || null,
        service,
        message,
      });

      if (error) throw error;

      setSent(true);
      toast.success("Request received. We will be in touch shortly.");
      form.reset();
    } catch (err: any) {
      console.error("Lead submission error:", err);
      toast.error(err.message || "Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <RevealBlock>
              <div className="text-mono-xs text-accent font-medium tracking-widest uppercase">
                06 — Contact
              </div>
            </RevealBlock>
            <h2 className="mt-8 text-display-xl text-foreground">
              <RevealText text="Ready" />
              <br />
              <span className="text-accent">
                <RevealText text="To Deploy?" delay={100} />
              </span>
            </h2>

            <RevealBlock
              delay={250}
              className="mt-12 space-y-8 border-t border-line/60 pt-10 text-sm"
            >
              <div>
                <div className="text-mono-xs text-mute font-medium uppercase">Headquarters</div>
                <div className="mt-2 text-foreground font-medium">{contactData.address}</div>
                <div className="text-mute">{contactData.city}</div>
              </div>
              <div>
                <div className="text-mono-xs text-mute font-medium uppercase">Direct</div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="mt-2 block text-foreground font-medium underline-offset-4 hover:text-accent hover:underline"
                >
                  {contactData.email}
                </a>
                <a
                  href={`tel:${contactData.phone.replace(/[^0-9+]/g, "")}`}
                  className="mt-1 block text-mute underline-offset-4 hover:text-accent hover:underline"
                >
                  {contactData.phone}
                </a>
              </div>
              <div>
                <div className="text-mono-xs text-mute font-medium uppercase">Operating Hours</div>
                <div className="mt-2 text-foreground font-medium">{contactData.hours}</div>
                <div className="mt-1 text-accent/80 text-sm">24/7 Emergency Support Available</div>
              </div>
            </RevealBlock>
          </div>

          <RevealBlock delay={200} className="md:col-span-6 md:col-start-7" y={40}>
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              <Field label="Name" name="name" autoComplete="name" required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Field label="Property / Location" name="property" />
              <Field
                label="Project Scope or Workforce Requirements"
                name="brief"
                textarea
                required
                placeholder="Describe your project or the technical teams you need."
              />

              <fieldset>
                <legend className="text-mono-xs text-mute">Scope (Optional)</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Skilled Labour Supply",
                    "Complete Renovation",
                    "Tile Installation",
                    "Waterproofing",
                    "Painting & Polish",
                    "Electrical & Plumbing",
                    "Gypsum & Carpentry",
                    "AC Maintenance",
                  ].map((t) => (
                    <label
                      key={t}
                      className="cursor-pointer border border-line px-4 py-2 text-[12px] tracking-wide text-foreground transition-colors has-checked:border-accent has-checked:bg-accent has-checked:text-background hover:border-accent/60"
                    >
                      <input type="checkbox" name="scope" value={t} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
                <p className="max-w-xs text-mono-xs text-mute">
                  Our team will review your request and provide a comprehensive consultation and
                  quotation within one working day.
                </p>
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-accent px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-foreground shadow-lg transition-all duration-500 hover:bg-foreground hover:text-background hover:-translate-y-1 disabled:opacity-50"
                    disabled={sent || loading}
                  >
                    {loading ? "Sending..." : sent ? "Received" : "Request Quote"}
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1.5"
                    >
                      {loading ? "..." : sent ? "✓" : "→"}
                    </span>
                  </button>
                </Magnetic>
              </div>
              {sent && (
                <p role="status" className="text-[13px] text-accent">
                  Thank you. Our project management team will be in touch within one working day.
                </p>
              )}
            </form>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="group block">
      <div className="flex items-baseline justify-between text-mono-xs text-mute">
        <span>{label}</span>
        {required && <span className="text-accent/70">required</span>}
      </div>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={3}
          placeholder={placeholder}
          className="mt-3 w-full resize-none border-b border-line bg-transparent py-3 text-lg text-foreground placeholder:text-mute/60 outline-none transition-colors focus:border-accent"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="mt-3 w-full border-b border-line bg-transparent py-3 text-lg text-foreground placeholder:text-mute/60 outline-none transition-colors focus:border-accent"
        />
      )}
    </label>
  );
}
