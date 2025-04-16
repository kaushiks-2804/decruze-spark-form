
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface ProjectWork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const OurWorkCarousel = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects: ProjectWork[] = [
    {
      id: 1,
      title: "Campus Connect Portal",
      description: "A student networking platform with event management and resource sharing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "web",
      link: "/project-request"
    },
    {
      id: 2,
      title: "Smart Study Planner",
      description: "AI-powered study scheduler with progress tracking and analytics",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "ai",
      link: "/project-request"
    },
    {
      id: 3,
      title: "Healthcare Appointment System",
      description: "Comprehensive platform for managing patient appointments and medical records",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "web",
      link: "/project-request"
    },
    {
      id: 4,
      title: "Sentiment Analysis Dashboard",
      description: "NLP-powered tool for analyzing sentiment from social media and feedback",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "ai",
      link: "/project-request"
    },
    {
      id: 5,
      title: "E-commerce Solution",
      description: "Full-featured online store with inventory management and analytics",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "web",
      link: "/project-request"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI Projects' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful student projects and client collaborations
            that showcase our expertise and innovation.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative px-4 md:px-10 mb-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border bg-card text-card-foreground">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge 
                          className={
                            project.category === 'web' 
                              ? 'bg-brand-purple/20 text-brand-purple hover:bg-brand-purple/30'
                              : 'bg-brand-teal/20 text-brand-teal hover:bg-brand-teal/30'
                          }
                        >
                          {project.category === 'web' ? 'Web App' : 'AI Project'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="left-1 bg-background hover:bg-background/90 border border-border text-foreground" />
              <CarouselNext className="right-1 bg-background hover:bg-background/90 border border-border text-foreground" />
            </div>
          </Carousel>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                className="gradient-button"
              >
                <Link to="/project-request">
                  Start Your Project
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get started with your own project</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default OurWorkCarousel;
