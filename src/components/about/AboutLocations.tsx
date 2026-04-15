const AboutLocations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-foreground text-center mb-16">
          Our Home Away from Home
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kenya */}
          <div className="bg-secondary rounded-xl overflow-hidden">
            <div className="w-full h-64">
              <iframe
                title="Kenya Office - Nairobi TRM"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d36.8876!3d-1.2197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d2b0b6b6b6b%3A0x0!2sTRM%2C+Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black text-foreground mb-2">Kenya Office</h3>
              <p className="text-muted-foreground">TRM, Nairobi, Kenya</p>
              <p className="text-muted-foreground mt-2 text-sm">East Africa Headquarters</p>
            </div>
          </div>

          {/* USA */}
          <div className="bg-secondary rounded-xl overflow-hidden">
            <div className="w-full h-64">
              <iframe
                title="USA Office - Texas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473672.5!2d-99.9018!3d31.9686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black text-foreground mb-2">USA Office</h3>
              <p className="text-muted-foreground">Texas, United States</p>
              <p className="text-muted-foreground mt-2 text-sm">North America Headquarters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocations;
