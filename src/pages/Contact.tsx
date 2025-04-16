
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, Loader2, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import SubmissionSuccess from '@/components/SubmissionSuccess';

// Define form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string({ required_error: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      console.log('Contact Form Data:', data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <div className="container max-w-3xl mx-auto py-16 px-4">
          <SubmissionSuccess 
            title="Message Sent Successfully!"
            message="Thank you for reaching out to us. We'll get back to you as soon as possible."
            returnPath="/"
            returnText="Back to Home"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Get in Touch</h1>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
              Have questions about our services? Looking to partner with us? 
              Drop us a message and we'll get back to you soon.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                  <h2 className="text-xl font-semibold border-b pb-3">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-brand-purple" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">Email</h3>
                        <a 
                          href="mailto:info@decruze.com" 
                          className="text-brand-purple hover:underline"
                        >
                          info@decruze.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-brand-teal" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">Phone</h3>
                        <a 
                          href="tel:+919876543210" 
                          className="text-brand-purple hover:underline"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-brand-purple" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">Office</h3>
                        <p className="text-gray-600">
                          123 Tech Park, Innovation Street<br />
                          Bangalore, Karnataka 560001
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-700 mb-3">Connect with us</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Office Location</h2>
                  <div className="rounded-lg overflow-hidden border border-gray-200 h-[250px]">
                    <iframe
                      title="Decruze Digital Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.99020464627!2d77.59791981482161!3d12.970847690855337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167f32dfc889%3A0xf5c2cb22af5af5a6!2sCubbon%20Park%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1650450471542!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 border-b flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <MessageSquare className="text-brand-purple" size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">Send us a message</h2>
                      <p className="text-gray-600 text-sm">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="input-label">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          {...register('name')}
                          className={cn(errors.name && "border-red-500")}
                        />
                        {errors.name && (
                          <p className="error-message">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="input-label">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="youremail@example.com"
                          {...register('email')}
                          className={cn(errors.email && "border-red-500")}
                        />
                        {errors.email && (
                          <p className="error-message">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="input-label">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={(value) => {
                        const event = {
                          target: {
                            name: 'subject',
                            value,
                          },
                        };
                        register('subject').onChange(event as any);
                      }}>
                        <SelectTrigger className={cn(errors.subject && "border-red-500")}>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Query</SelectItem>
                          <SelectItem value="mentor">Mentor Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="error-message">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="input-label">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you need help with..."
                        rows={5}
                        {...register('message')}
                        className={cn(errors.message && "border-red-500")}
                      />
                      {errors.message && (
                        <p className="error-message">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="gradient-button w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
