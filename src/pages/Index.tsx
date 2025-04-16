
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Server, Cpu, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import OurWorkCarousel from '@/components/OurWorkCarousel';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-brand-purple">Academic Projects</span> into Reality
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We empower college students to build innovative software projects that stand out. 
                Share your requirements, and we'll help turn your ideas into functional applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-button text-lg py-6 px-8"
                >
                  <Link to="/project-request">
                    Submit Project Request
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-50 text-gray-800 border-gray-200 text-lg py-6 px-8"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-lg">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 p-1">
                  <div className="flex gap-2 px-4 py-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="text-sm bg-gray-900 text-green-400 p-4 rounded-lg shadow-inner overflow-auto">
                    <code>
{`// Your innovative project
class Project {
  constructor() {
    this.idea = "brilliant";
    this.execution = "flawless";
    this.result = "outstanding";
  }

  start() {
    console.log("Let's build something amazing!");
  }
}

const yourProject = new Project();
yourProject.start();

// Output: Let's build something amazing!`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose Decruze Digital?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in helping college students bring their software projects to life
              with industry-standard tools and practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <div className="h-12 w-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Modern, responsive websites and web applications built with the latest technologies.
              </p>
            </div>

            <div className="card">
              <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & ML Applications</h3>
              <p className="text-gray-600">
                Intelligent applications that leverage machine learning and artificial intelligence.
              </p>
            </div>

            <div className="card">
              <div className="h-12 w-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Solutions</h3>
              <p className="text-gray-600">
                Efficient database design and implementation for your data-driven applications.
              </p>
            </div>

            <div className="card">
              <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive, beautiful interfaces that provide excellent user experience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/project-request"
              className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-semibold transition-colors"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Submit your project request</span>
              <ArrowRight 
                className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                size={18} 
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work Carousel Section */}
      <OurWorkCarousel />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple/10 to-brand-teal/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Project?</h2>
                <p className="text-gray-600 mb-6">
                  Let's collaborate to create something amazing. Submit your project details and we'll 
                  get back to you within 24 hours to discuss the next steps.
                </p>
                <ul className="space-y-2 mb-8">
                  {['Web Apps', 'Mobile Apps', 'AI/ML Projects', 'UI/UX Design', 'Database Solutions'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-brand-purple" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="gradient-button w-full md:w-auto text-lg py-6 px-10"
                >
                  <Link to="/project-request">
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
