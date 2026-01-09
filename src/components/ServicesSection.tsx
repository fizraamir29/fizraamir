import { Palette, Image, Layout, Sparkles, PenTool, Layers } from "lucide-react";

const services = [
  {
    icon: Image,
    title: "YouTube Thumbnails",
    description: "Eye-catching thumbnails that boost your click-through rate and make your videos stand out.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Unique and memorable logos that represent your brand identity perfectly.",
  },
  {
    icon: Layout,
    title: "Social Media Carousels",
    description: "Engaging carousel designs for Instagram, LinkedIn, and other platforms.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand packages including colors, typography, and visual guidelines.",
  },
  {
    icon: Sparkles,
    title: "Social Media Posts",
    description: "Stunning graphics for all your social media marketing needs.",
  },
  {
    icon: Layers,
    title: "Presentation Design",
    description: "Professional PowerPoint and pitch deck designs that impress.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary text-sm font-medium mb-4 tracking-wider">WHAT I OFFER</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
