import { useState, useEffect } from "react"; // Added useEffect
import { useLocation } from "react-router-dom"; // Added useLocation
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ServicesContactProps {
  sourcePage?: string;
}

const ServicesContact = ({ sourcePage = "unknown" }: ServicesContactProps) => {
  const { toast } = useToast();
  const { hash } = useLocation(); // Get URL hash
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", description: "", budget: "",
  });

  // Handle automatic scrolling when the hash is #contact
  useEffect(() => {
    if (hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      first_name: form.firstName,
      last_name: form.lastName || null,
      email: form.email,
      phone: form.phone || null,
      description: form.description || null,
      budget: form.budget || null,
      source_page: sourcePage,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Something went wrong", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
      setForm({ firstName: "", lastName: "", email: "", phone: "", description: "", budget: "" });
    }
  };

  return (
    // Added id="contact" and scroll-mt-24 to align with Navbar height
    <section id="contact" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
          Ready to Accelerate Your Vision?
        </h2>
        <p className="text-lg text-muted-foreground italic mb-12">
          Tell us about your project. Our experts are ready to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm font-bold text-foreground mb-2 block">
                First Name <span className="text-accent">*</span>
              </label>
              <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full bg-transparent border-b border-border text-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-2 block">
                Last Name <span className="text-accent">*</span>
              </label>
              <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full bg-transparent border-b border-border text-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm font-bold text-foreground mb-2 block">
                Email <span className="text-accent">*</span>
              </label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-border text-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-2 block">
                Phone <span className="text-accent">*</span>
              </label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-border text-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-foreground mb-2 block">
              Project Description <span className="text-accent">*</span>
            </label>
            <input name="description" value={form.description} onChange={handleChange} className="w-full bg-transparent border-b border-border text-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
          </div>

          <div>
            <label className="text-sm font-bold text-foreground mb-2 block">
              Estimated Budget <span className="text-accent">*</span>
            </label>
            <select name="budget" value={form.budget} onChange={handleChange} className="w-full bg-background border border-border text-muted-foreground rounded px-3 py-3 text-sm focus:outline-none focus:border-accent transition-colors">
              <option value="">Select</option>
              <option value="25k-50k">below- $5,000</option>
              <option value="25k-50k">$5,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k+">$250,000+</option>
              <option value="25k-50k">$Other/dont know </option>
            </select>
          </div>

          <button type="submit" disabled={submitting} className="btn-accent text-sm uppercase tracking-wider font-bold disabled:opacity-50">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServicesContact;