import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const driveItems = [
  { letter: "D", text: "efine the vision" },
  { letter: "R", text: "eview the reality" },
  { letter: "I", text: "dentify the risks" },
  { letter: "V", text: "erify the value" },
  { letter: "E", text: "xecute with precision" },
];

const AboutDrive = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-16">
              The Code that Fuels Us:<br />
              <span className="text-accent-highlight">D.R.I.V.E.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              InvCode 29 lives by the D.R.I.V.E. code to propel every project forward with purpose, precision, and measurable impact. Through best-practice methods and an unwavering commitment to excellence, we develop high-quality products and solutions that consistently exceed expectations.
            </p>
            <Link to="/#process" className="mt-8 text-[#2590b1] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Our Vision to Value Accelerator <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-6">
            {driveItems.map((item) => (
              <div key={item.letter} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-2xl font-bold text-foreground">
                  <span className="text-accent-highlight font-black">{item.letter}</span>{item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDrive;
