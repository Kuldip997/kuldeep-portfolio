import { Zap, Palette, DollarSign } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Palette,
    title: "Clean Design",
    description: "Modern, minimal aesthetics that stand out",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Premium quality at competitive prices",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  About Me
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Helping You Build Your Online Presence
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a freelance web developer passionate about creating beautiful,
                functional websites that help photographers, freelancers, and small
                businesses establish a strong online presence.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether you're a photographer looking to showcase your portfolio, a
                fitness trainer wanting to attract clients, or a local café needing
                an online menu – I'm here to bring your vision to life with clean,
                responsive designs that work flawlessly on any device.
              </p>

              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-sm font-bold text-primary">
                      +
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Happy clients</span> trust
                    me with their websites
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-4 p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
