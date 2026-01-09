import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;

    try {
      const response = await fetch(
        "https://formspree.io/f/mreezzzb",
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let’s discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl border space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg border bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>

            {success && (
              <p className="text-green-600 text-sm">
                ✅ Message sent successfully! I’ll get back to you soon.
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm">
                ❌ {error}
              </p>
            )}
          </form>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Prefer a Quick Chat?</h3>
            <p className="text-muted-foreground">
              Reach out directly for faster communication.
            </p>

            <a
              href="https://wa.me/918600264893"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border rounded-xl hover:bg-card transition"
            >
              <MessageCircle className="text-green-500" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  Quick response within hours
                </p>
              </div>
            </a>

            <a
              href="mailto:patilkuldip940@gmail.com"
              className="flex items-center gap-4 p-4 border rounded-xl hover:bg-card transition"
            >
              <Mail />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  patilkuldip940@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
