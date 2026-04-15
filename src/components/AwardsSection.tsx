import awardInc5000 from "@/assets/award-inc5000.png";
import awardClutch from "@/assets/award-clutch.png";
import awardSoftwareworld from "@/assets/award-softwareworld.png";
import awardGoodfirms from "@/assets/award-goodfirms.png";

const awards = [
  { image: awardInc5000, title: "Inc. 5000 Top Fastest Growing Companies" },
  { image: awardClutch, title: "Clutch Top AI Consulting Company" },
  { image: awardSoftwareworld, title: "SoftwareWorld Top Rated Custom Software Development" },
  { image: awardGoodfirms, title: "GoodFirms Top Software Development Companies" },
];

const AwardsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-16">
          <span className="text-accent-highlight">Value</span> that is Recognized
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-border"
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <h3 className="font-bold text-foreground text-base leading-tight">{award.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
