import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// 1. Import the video file from your assets folder
import backgroundVideo from "@/assets/homevideo.mp4"; 

interface ServicesHeroProps {
  title?: string;
  sourcePage?: string;
}

const ServicesHero = ({ title = "Services", sourcePage = "services" }: ServicesHeroProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", description: "", budget: "",
  });

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
    <section className="relative min-h-[700px] w-full pt-0 overflow-hidden bg-black">
      {/* --- VIDEO LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* 2. Use the imported variable as the source */}
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full">
        <div className="flex flex-col lg:flex-row justify-end min-h-[700px]">
          
          <div className="w-full lg:w-1/2 flex items-end px-6 lg:px-12 py-16">
            <h1 className="text-3xl md:text-4xl font-black text-primary-foreground leading-mb10  uppercase border-l-4 border-accent pl-6 drop-shadow-2xl">
              {title}
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-full h-full bg-primary/40 backdrop-blur-2xl border-l border-primary-foreground/10 py-20 px-8 lg:px-24 flex flex-col justify-center shadow-2xl">
              
              <div className="flex items-center gap-4 mb-10">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <MessageSquare size={28} className="text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-accent-highlight uppercase tracking-tight">
                  Tell us about your project.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">First Name <span className="text-accent">*</span></label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-2 text-base focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">Last Name <span className="text-accent">*</span></label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-2 text-base focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">Email <span className="text-accent">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-2 text-base focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">Phone <span className="text-accent">*</span></label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-2 text-base focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">Project Description <span className="text-accent">*</span></label>
                  <textarea 
                    name="description" 
                    rows={2}
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-2 text-base focus:outline-none focus:border-accent transition-colors resize-none" 
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground/60 mb-2 block">Estimated Budget <span className="text-accent">*</span></label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="w-full bg-primary/40 border border-primary-foreground/20 text-primary-foreground rounded-none px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-primary text-primary-foreground">Select Range</option>
                    <option value="25k-50k" className="bg-primary text-primary-foreground">$25,000 - $50,000</option>
                    <option value="50k-100k" className="bg-primary text-primary-foreground">$50,000 - $100,000</option>
                    <option value="100k-250k" className="bg-primary text-primary-foreground">$100,000 - $250,000</option>
                    <option value="250k+" className="bg-primary text-primary-foreground">$250,000+</option>
                  </select>
                </div>

                <button type="submit" disabled={submitting} className="btn-accent py-4 px-12 text-[12px] uppercase tracking-[0.3em] font-black disabled:opacity-50 mt-4 shadow-xl">
                  {submitting ? "Submitting..." : "Submit Project"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;