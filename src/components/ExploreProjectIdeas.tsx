
import { useState } from 'react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Complexity = 'Easy' | 'Medium' | 'Advanced';

interface ProjectIdea {
  id: number;
  title: string;
  complexity: Complexity;
  brief: string;
}

interface SemesterGroup {
  title: string;
  description: string;
  projects: ProjectIdea[];
}

const ExploreProjectIdeas = () => {
  const [activeTab, setActiveTab] = useState<string>('sem-3-4');
  
  const semesterGroups: SemesterGroup[] = [
    {
      title: 'Semester 3-4',
      description: 'Foundation projects suitable for early CS/IT students',
      projects: [
        {
          id: 1,
          title: 'Library Management System',
          complexity: 'Easy',
          brief: 'Build a simple system to track books, members, and lending records.'
        },
        {
          id: 2,
          title: 'Student Result Portal',
          complexity: 'Easy',
          brief: 'Develop a web application to display and manage student exam results.'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          complexity: 'Medium',
          brief: 'Create a weather application that fetches and displays data from a weather API.'
        },
        {
          id: 4,
          title: 'Personal Blog Platform',
          complexity: 'Medium',
          brief: 'Build a CMS for creating and managing blog posts with user authentication.'
        },
      ]
    },
    {
      title: 'Semester 5-6',
      description: 'Intermediate projects for growing skills and portfolio development',
      projects: [
        {
          id: 5,
          title: 'E-commerce Platform',
          complexity: 'Medium',
          brief: 'Develop a full-stack online store with product catalog and shopping cart.'
        },
        {
          id: 6,
          title: 'Expense Tracker with Analytics',
          complexity: 'Medium',
          brief: 'Create an application to track expenses with visual reports and insights.'
        },
        {
          id: 7,
          title: 'Sentiment Analysis Dashboard',
          complexity: 'Advanced',
          brief: 'Build an NLP-powered tool for analyzing sentiment from text data.'
        },
        {
          id: 8,
          title: 'Real-time Chat Application',
          complexity: 'Medium',
          brief: 'Create a WebSocket-based live chat platform with multiple rooms.'
        },
      ]
    },
    {
      title: 'Semester 7-8',
      description: 'Advanced projects suitable for final year and placement preparation',
      projects: [
        {
          id: 9,
          title: 'AI-Powered Resume Analyzer',
          complexity: 'Advanced',
          brief: 'Build a system that uses AI to evaluate and score resumes for job positions.'
        },
        {
          id: 10,
          title: 'Blockchain-based Certificate Verification',
          complexity: 'Advanced',
          brief: 'Create a platform to issue and verify educational certificates using blockchain.'
        },
        {
          id: 11,
          title: 'Healthcare Appointment System',
          complexity: 'Medium',
          brief: 'Develop a comprehensive system for managing patient appointments and records.'
        },
        {
          id: 12,
          title: 'Computer Vision Object Recognition',
          complexity: 'Advanced',
          brief: 'Build an application that can identify and classify objects in images and video.'
        },
      ]
    },
  ];

  const getComplexityColor = (complexity: Complexity) => {
    switch (complexity) {
      case 'Easy':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Medium':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getComplexityStars = (complexity: Complexity) => {
    switch (complexity) {
      case 'Easy':
        return 1;
      case 'Medium':
        return 2;
      case 'Advanced':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Explore Project Ideas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of project ideas organized by semester and complexity level.
            Find the perfect project to enhance your skills and portfolio.
          </p>
        </div>

        <Tabs 
          defaultValue="sem-3-4" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="sem-3-4">Semester 3-4</TabsTrigger>
            <TabsTrigger value="sem-5-6">Semester 5-6</TabsTrigger>
            <TabsTrigger value="sem-7-8">Semester 7-8</TabsTrigger>
          </TabsList>
          
          {semesterGroups.map((group, index) => {
            const tabValue = `sem-${(index * 2) + 3}-${(index * 2) + 4}`;
            
            return (
              <TabsContent key={tabValue} value={tabValue} className="focus-visible:outline-none focus-visible:ring-0">
                <Card>
                  <CardHeader>
                    <CardTitle>{group.title}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[500px] rounded-md">
                      <Accordion type="single" collapsible className="w-full">
                        {group.projects.map(project => (
                          <AccordionItem key={project.id} value={`item-${project.id}`}>
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex items-center space-x-2 text-left">
                                <BookOpen className="h-5 w-5 text-brand-purple flex-shrink-0" />
                                <span>{project.title}</span>
                                <div className="flex ml-auto mr-4">
                                  {[...Array(getComplexityStars(project.complexity))].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className="h-4 w-4 fill-current text-amber-500" 
                                      fill="currentColor"
                                    />
                                  ))}
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                                <p className="text-gray-600">{project.brief}</p>
                                <div className="flex justify-between items-center">
                                  <Badge className={`${getComplexityColor(project.complexity)}`}>
                                    {project.complexity}
                                  </Badge>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    asChild
                                    className="text-brand-purple hover:text-brand-purple/80"
                                  >
                                    <Link to="/project-request" className="flex items-center">
                                      Request This Project
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild>
                      <Link to="/project-request">Submit Custom Project Request</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ExploreProjectIdeas;
