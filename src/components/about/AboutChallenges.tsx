import { Link } from "react-router-dom";

const AboutChallenges = () => {
  return (
    // Added id="challenges" and scroll-mt-24
    <section id="challenges" className="py-20 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              We Face <span className="text-accent-highlight">Challenges</span> Head On
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              When storms approach, cattle huddle together and wait out the weather. Bison, on the other hand, charge directly into the storm. InvCode 29 embodies that same courage and resilience. We do not shy away from challenges; we face them head-on. Together we adapt, evolve, and move through adversity with speed and strength, emerging sharper, stronger, and ready for whatever comes next.
            </p>
            <Link to="/about" className="mt-8 text-[#2590b1] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Our Culture Makes Us Stronger
            </Link>
          </div>

          {/* Bull/Bison SVG placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-accent flex items-center justify-center bg-primary">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="50" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">InvCode 29</text>
                <text x="50" y="65" textAnchor="middle" fill="hsl(65, 99%, 42%)" fontSize="10" fontWeight="bold">BE A</text>
                <text x="50" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BISON</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChallenges;