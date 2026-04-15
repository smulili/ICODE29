const team = [
  { name: "Shadrack Richards", role: "CEO/President/Founder", initials: "CEO" },
  { name: "Liam Johnson", role: "Full Stack Developer Lead", initials: "FSD" },
  { name: "Alexandra Smith", role: "Project Manager", initials: "PM" },
  { name: "Isabella Garcia", role: "IT Forensics Specialist/Co-Founder", initials: "ITF" },
];

const AboutVisionaries = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16">
          The InvCode 29 <span className="text-accent-highlight">Visionaries</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.role} className="text-center">
              <div className="w-full aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl font-black text-muted-foreground">{member.initials}</span>
              </div>
              <h3 className="text-lg font-black text-accent-highlight">{member.name}</h3>
              <p className="text-sm font-bold text-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVisionaries;
