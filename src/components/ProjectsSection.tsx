import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Brand Identity Design",
    client: "Organo",
    skills: ["Branding", "Logo design"],
    image: project1,
  },
  {
    title: "Corporate Logo",
    client: "TechFlow",
    skills: ["Logo", "Brand Guidelines"],
    image: project2,
  },
  {
    title: "Luxury Brand Package",
    client: "GoldCraft",
    skills: ["Branding", "Packaging"],
    image: project3,
  },
  {
    title: "Social Media Kit",
    client: "NeonVibe",
    skills: ["Social Media", "Carousel"],
    image: project4,
  },
];

const ProjectsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-4 tracking-wider animate-fade-up">PORTFOLIO</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 animate-fade-up">
            My Projects Highlight
          </h2>
          <Button variant="outline" className="rounded-full px-8 py-6 border-border hover:bg-secondary hover-scale" onClick={scrollToContact}>
            WORK WITH ME
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-secondary aspect-square hover-glow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="h-px bg-primary w-8 group-hover:w-12 transition-all duration-300" />
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>
                    <span className="text-foreground">Client:</span> {project.client}
                  </span>
                  <span>
                    <span className="text-foreground">Skills:</span> {project.skills.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
