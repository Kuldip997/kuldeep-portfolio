import { User, Building2, Rocket, Search } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Portfolio Websites",
    description:
      "Showcase your work beautifully with a custom portfolio that highlights your unique skills and projects.",
  },
  {
    icon: Building2,
    title: "Business One-Page Websites",
    description:
      "Professional single-page websites for small businesses to attract customers and boost credibility.",
  },
  {
    icon: Rocket,
    title: "Website Setup & Deployment",
    description:
      "Complete setup and deployment services to get your website live and running smoothly.",
  },
  {
    icon: Search,
    title: "Basic SEO & Performance",
    description:
      "Optimize your website for search engines and ensure fast loading times for better user experience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive web development services tailored to help you succeed
              online.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-semibold text-foreground text-xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
