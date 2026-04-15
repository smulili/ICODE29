import { useState } from "react";
import { MessageSquare } from "lucide-react";
// Using the direct @ alias import strategy
import industriesVideoSource from "@/assets/homevideo.mp4"; 

const IndustriesHero = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", description: "", budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-[7000px] overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 lg:w-1/2 overflow-hidden bg-primary">
        <video
          autoPlay
          loop
          muted
          playsInline
          key={industriesVideoSource}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={industriesVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />

        <div className="absolute bottom-12 left-8 lg:left-12 z-10">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground leading-none drop-shadow-lg">
            Industries
          </h1>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2 bg-primary py-16 px-8 lg:px-16 min-h-[700px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare size={28} className="text-accent" />
              <h2 className="text-2xl font-bold text-accent-highlight">Tell us about your project.</h2>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input name="firstName" value={form.firstName} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input name="lastName" value={form.lastName} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                  Project Description <span className="text-accent">*</span>
                </label>
                <input name="description" value={form.description} onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2 block">
                  Estimated Budget <span className="text-accent">*</span>
                </label>
                <select name="budget" value={form.budget} onChange={handleChange}
                  className="w-full bg-primary border border-primary-foreground/30 text-primary-foreground/60 rounded px-3 py-3 text-sm focus:outline-none focus:border-accent transition-colors">
                  <option value="">Select</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k+">$250,000+</option>
                </select>
              </div>

              <button className="btn-accent text-sm uppercase tracking-wider font-bold">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;