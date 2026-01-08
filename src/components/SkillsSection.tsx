import { Code2, FileCode, Sparkles, Smartphone, Layers } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode, color: "from-orange-400 to-orange-600" },
  { name: "CSS", icon: Layers, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-yellow-600" },
  { name: "AI Builders", icon: Sparkles, color: "from-purple-400 to-purple-600" },
  { name: "Responsive", icon: Smartphone, color: "from-green-400 to-green-600" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Skills & Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies and tools I use to bring your ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg min-w-[140px]">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-card" />
                    </div>
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I continuously learn and adapt to new technologies to deliver the
              best solutions for my clients. From traditional web development to
              modern AI-powered website builders, I choose the right tools for
              each project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
