import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import photographerProject from "@/assets/project-photographer.jpg";
import gymProject from "@/assets/project-gym.jpg";
import cafeProject from "@/assets/project-cafe.jpg";

const projects = [
  {
    title: "Photographer Portfolio",
    description:
      "A stunning portfolio website for a professional photographer showcasing their best work with an elegant gallery layout.",
    image: photographerProject,
    tags: ["Portfolio", "Gallery", "Responsive"],
    liveUrl: "https://mahi-photographyy.netlify.app/",
  },
  {
    title: "Gym Trainer Website",
    description:
      "Modern fitness website for a personal trainer featuring class schedules, testimonials, and booking functionality.",
    image: gymProject,
    tags: ["Fitness", "Booking", "One-Page"],
  },
  {
    title: "Café Business Website",
    description:
      "Warm and inviting website for a local café with menu showcase, location info, and online ordering integration.",
    image: cafeProject,
    tags: ["Business", "Menu", "Local SEO"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of websites I've crafted for clients across different
              industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden
                           transition-all duration-500 ease-out
                           hover:-translate-y-2
                           hover:border-primary/40
                           hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)]
                           focus-within:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                               transition-transform duration-1000 ease-out
                               group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0
                               bg-gradient-to-t from-background/95 via-background/30 to-transparent
                               opacity-0 group-hover:opacity-100
                               transition-opacity duration-500"
                  />

                  {/* Hover CTA */}
                  <div
                    className="absolute inset-0 flex items-center justify-center
                               opacity-0 group-hover:opacity-100
                               transition-all duration-500"
                  >
                    {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Button variant="secondary">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      Live Preview
                                    </Button>
                                  </a>
                                )}

                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-primary/10 text-primary font-medium
                                   transition-all duration-300
                                   group-hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-semibold text-foreground text-xl transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
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

export default ProjectsSection;
