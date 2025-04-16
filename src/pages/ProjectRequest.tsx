
import { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import ProgressBar from '@/components/ProgressBar';
import FileUpload from '@/components/FileUpload';
import SubmissionSuccess from '@/components/SubmissionSuccess';
import { cn } from '@/lib/utils';

// Define the form schema with Zod
const formSchema = z.object({
  // Step 1: Personal Information
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .optional(),
  college: z.string().min(2, { message: "Please enter your college name" }),
  department: z.string().min(2, { message: "Please select your department" }),
  
  // Step 2: Project Information
  projectTitle: z.string()
    .min(2, { message: "Project title must be at least 2 characters" })
    .optional(),
  domain: z.string({ required_error: "Please select a domain" }),
  projectType: z.string({ required_error: "Please select a project type" }),
  technologies: z.array(z.string()).optional(),
  customTechnology: z.string().optional(),
  
  // Step 3: Project Details
  problemStatement: z.string()
    .min(10, { message: "Please provide a brief description of your project" }),
  deadline: z.string().optional(),
  hasTeam: z.string(),
  teamSize: z.string().optional(),
  extraRequirements: z.array(z.string()).optional(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ProjectRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      college: '',
      department: '',
      projectTitle: '',
      domain: '',
      projectType: '',
      technologies: [],
      customTechnology: '',
      problemStatement: '',
      deadline: '',
      hasTeam: 'no',
      teamSize: '',
      extraRequirements: [],
      additionalInfo: '',
    },
  });
  
  const { 
    handleSubmit, 
    control, 
    register, 
    watch, 
    formState: { errors, isValid },
    trigger
  } = methods;
  
  const watchHasTeam = watch('hasTeam');
  const totalSteps = 3;
  
  const technologies = [
    { id: 'react', label: 'React.js' },
    { id: 'angular', label: 'Angular' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'node', label: 'Node.js' },
    { id: 'python', label: 'Python' },
    { id: 'django', label: 'Django' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'reactNative', label: 'React Native' },
    { id: 'tensorflow', label: 'TensorFlow' },
    { id: 'pytorch', label: 'PyTorch' },
  ];
  
  const extraRequirements = [
    { id: 'hosting', label: 'Hosting Setup' },
    { id: 'report', label: 'Project Report' },
    { id: 'presentation', label: 'Presentation Slides' },
    { id: 'documentation', label: 'Technical Documentation' },
    { id: 'testing', label: 'Testing & QA' },
  ];
  
  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['name', 'email', 'college', 'department'];
        break;
      case 2:
        fieldsToValidate = ['domain', 'projectType'];
        break;
      case 3:
        fieldsToValidate = ['problemStatement', 'hasTeam'];
        break;
    }
    
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };
  
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  
  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    try {
      // In a real app, you would send the data to your backend here
      console.log('Form Data:', data);
      console.log('Files:', files);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle file upload changes
  const handleFileChange = (fileList: FileList | null) => {
    setFiles(fileList);
  };
  
  if (isSuccess) {
    return (
      <Layout>
        <div className="container max-w-3xl mx-auto py-16 px-4">
          <SubmissionSuccess 
            title="Project Request Submitted!"
            message="Thank you for submitting your project request. Our team will review your details and get back to you within 24 hours."
            returnPath="/"
            returnText="Back to Home"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 border-b">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Project Request Form
                </h1>
                <p className="text-gray-600 mt-2">
                  Fill out the details below to submit your project requirements
                </p>
                
                <div className="mt-6">
                  <ProgressBar 
                    currentStep={currentStep} 
                    totalSteps={totalSteps} 
                  />
                </div>
              </div>
              
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8">
                  {/* Step 1: Personal Information */}
                  <div className={cn(currentStep === 1 ? 'block' : 'hidden')}>
                    <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                    
                    <div className="space-y-6">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="input-label">
                            Phone Number (Optional)
                          </Label>
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            {...register('phone')}
                            className={cn(errors.phone && "border-red-500")}
                          />
                          {errors.phone && (
                            <p className="error-message">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="college" className="input-label">
                            College Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="college"
                            placeholder="Enter your college name"
                            {...register('college')}
                            className={cn(errors.college && "border-red-500")}
                          />
                          {errors.college && (
                            <p className="error-message">{errors.college.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="department" className="input-label">
                          Department <span className="text-red-500">*</span>
                        </Label>
                        <Controller
                          name="department"
                          control={control}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className={cn(errors.department && "border-red-500")}>
                                <SelectValue placeholder="Select your department" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cs">Computer Science (CS)</SelectItem>
                                <SelectItem value="it">Information Technology (IT)</SelectItem>
                                <SelectItem value="aiml">
                                  Artificial Intelligence & Machine Learning (AIML)
                                </SelectItem>
                                <SelectItem value="aids">
                                  Artificial Intelligence & Data Science (AIDS)
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.department && (
                          <p className="error-message">{errors.department.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: Project Information */}
                  <div className={cn(currentStep === 2 ? 'block' : 'hidden')}>
                    <h2 className="text-xl font-semibold mb-6">Project Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="projectTitle" className="input-label">
                          Project Title (Optional)
                        </Label>
                        <Input
                          id="projectTitle"
                          placeholder="Enter your project title if you have one"
                          {...register('projectTitle')}
                          className={cn(errors.projectTitle && "border-red-500")}
                        />
                        {errors.projectTitle && (
                          <p className="error-message">{errors.projectTitle.message}</p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="domain" className="input-label">
                            Preferred Domain <span className="text-red-500">*</span>
                          </Label>
                          <Controller
                            name="domain"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className={cn(errors.domain && "border-red-500")}>
                                  <SelectValue placeholder="Select domain" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="web-dev">Web Development</SelectItem>
                                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                                  <SelectItem value="ai-ml">AI/ML</SelectItem>
                                  <SelectItem value="data-science">Data Science</SelectItem>
                                  <SelectItem value="cyber-security">Cyber Security</SelectItem>
                                  <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                                  <SelectItem value="blockchain">Blockchain</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.domain && (
                            <p className="error-message">{errors.domain.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="projectType" className="input-label">
                            Type of Project <span className="text-red-500">*</span>
                          </Label>
                          <Controller
                            name="projectType"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className={cn(errors.projectType && "border-red-500")}>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="mini">Mini Project</SelectItem>
                                  <SelectItem value="major">Major Project</SelectItem>
                                  <SelectItem value="final-year">Final Year Project</SelectItem>
                                  <SelectItem value="research">Research-based Project</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.projectType && (
                            <p className="error-message">{errors.projectType.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="input-label mb-2 block">
                          Technologies to Use (Optional)
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <Controller
                            name="technologies"
                            control={control}
                            render={({ field }) => (
                              <>
                                {technologies.map((tech) => (
                                  <div key={tech.id} className="flex items-center space-x-2">
                                    <Checkbox
                                      id={tech.id}
                                      checked={field.value?.includes(tech.id)}
                                      onCheckedChange={(checked) => {
                                        const updatedTech = checked
                                          ? [...(field.value || []), tech.id]
                                          : field.value?.filter((value) => value !== tech.id) || [];
                                        field.onChange(updatedTech);
                                      }}
                                    />
                                    <Label
                                      htmlFor={tech.id}
                                      className="text-sm cursor-pointer"
                                    >
                                      {tech.label}
                                    </Label>
                                  </div>
                                ))}
                              </>
                            )}
                          />
                        </div>
                        
                        <div className="mt-4">
                          <Label htmlFor="customTechnology" className="input-label">
                            Other Technologies (Comma-separated)
                          </Label>
                          <Input
                            id="customTechnology"
                            placeholder="Java, Spring Boot, AWS, etc."
                            {...register('customTechnology')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Project Details */}
                  <div className={cn(currentStep === 3 ? 'block' : 'hidden')}>
                    <h2 className="text-xl font-semibold mb-6">Project Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="problemStatement" className="input-label">
                          Project Description / Problem Statement <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="problemStatement"
                          placeholder="Tell us what you're dreaming to build!"
                          {...register('problemStatement')}
                          className={cn(
                            "min-h-[120px]",
                            errors.problemStatement && "border-red-500"
                          )}
                        />
                        {errors.problemStatement && (
                          <p className="error-message">{errors.problemStatement.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="deadline" className="input-label">
                          Expected Deadline (Optional)
                        </Label>
                        <Input
                          id="deadline"
                          type="date"
                          {...register('deadline')}
                        />
                      </div>
                      
                      <div>
                        <Label className="input-label">
                          Do You Have a Team? <span className="text-red-500">*</span>
                        </Label>
                        <Controller
                          name="hasTeam"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              className="flex space-x-4 mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="team-yes" />
                                <Label htmlFor="team-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="team-no" />
                                <Label htmlFor="team-no">No</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                      </div>
                      
                      {watchHasTeam === 'yes' && (
                        <div>
                          <Label htmlFor="teamSize" className="input-label">
                            Team Size
                          </Label>
                          <Controller
                            name="teamSize"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2">2 members</SelectItem>
                                  <SelectItem value="3">3 members</SelectItem>
                                  <SelectItem value="4">4 members</SelectItem>
                                  <SelectItem value="5+">5+ members</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                      )}
                      
                      <div>
                        <Label className="input-label mb-2 block">
                          Extra Requirements (Optional)
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Controller
                            name="extraRequirements"
                            control={control}
                            render={({ field }) => (
                              <>
                                {extraRequirements.map((req) => (
                                  <div key={req.id} className="flex items-center space-x-2">
                                    <Checkbox
                                      id={req.id}
                                      checked={field.value?.includes(req.id)}
                                      onCheckedChange={(checked) => {
                                        const updatedReqs = checked
                                          ? [...(field.value || []), req.id]
                                          : field.value?.filter((value) => value !== req.id) || [];
                                        field.onChange(updatedReqs);
                                      }}
                                    />
                                    <Label
                                      htmlFor={req.id}
                                      className="text-sm cursor-pointer"
                                    >
                                      {req.label}
                                    </Label>
                                  </div>
                                ))}
                              </>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="input-label mb-2 block">
                          Upload Reference Files (Optional)
                        </Label>
                        <FileUpload 
                          onChange={handleFileChange}
                          label="Upload Reference Documents"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Max file size: 5MB. Supported formats: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, PNG
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="additionalInfo" className="input-label">
                          Additional Information (Optional)
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any other details you'd like to share"
                          {...register('additionalInfo')}
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex items-center"
                      >
                        <ChevronLeft className="mr-2" size={16} />
                        Previous
                      </Button>
                    )}
                    
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="gradient-button ml-auto"
                      >
                        Next
                        <ChevronRight className="ml-2" size={16} />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="gradient-button ml-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectRequest;
