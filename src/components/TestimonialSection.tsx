import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium mb-4 tracking-wider">CLIENT LOVE</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-12">
            Testimonial
          </h2>
          
          <div className="relative p-8 rounded-2xl bg-secondary/30 border border-border">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/30" />
            
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Fizra was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and
              she delivered. I tried designing the logo myself thinking I wouldn't need to pay for a
              professional graphic designer but I was wrong. Working with Fizra was worth every penny and was
              surprisingly affordable. Her styling simplicity is key to a successful logo! 
              I can't thank Fizra enough for her effort and professionalism. I would recommend her to anyone looking
              for a designer.
            </blockquote>
            
            <cite className="not-italic text-primary font-medium text-lg">
              –Martin Lee
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
