"use client";

import { useState } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, User, Building, Info, Check } from "lucide-react";

const companySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companySize: z.string().min(1, "Company size is required"),
  industry: z.string().min(1, "Industry is required"),
  annualItBudget: z.string().min(1, "Annual IT budget is required"),
  primaryItChallenge: z.string().min(1, "Primary IT challenge is required"),
});

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  email: z.string().email("Invalid email address"),
  jobTitle: z.string().min(1, "Job title is required"),
  companies: z.array(companySchema).min(1, "At least one company is required"),
  howDidYouHearAboutUs: z.string().min(1, "This field is required"),
  additionalInfo: z.string().optional(),
  emailPreferences: z.object({
    productUpdates: z.boolean(),
    industryInsights: z.boolean(),
    promotionalOffers: z.boolean(),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreativeMultiCompanyOnboardingForm() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      jobTitle: "",
      companies: [{ companyName: "", companySize: "", industry: "", annualItBudget: "", primaryItChallenge: "" }],
      howDidYouHearAboutUs: "",
      additionalInfo: "",
      emailPreferences: {
        productUpdates: false,
        industryInsights: false,
        promotionalOffers: false,
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "companies",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const steps = [
    { title: "Personal Info", icon: <User className="w-6 h-6" />, fields: ["firstName", "lastName", "mobileNumber", "email", "jobTitle"] },
    { title: "Company Info", icon: <Building className="w-6 h-6" />, fields: ["companies"] },
    { title: "Additional Info", icon: <Info className="w-6 h-6" />, fields: ["howDidYouHearAboutUs", "additionalInfo", "emailPreferences"] },
  ];

  const currentFields = steps[step].fields;

  const handleNextStep = () => {
    const fieldsToValidate = steps[step].fields.flatMap((field) => (field === "companies" ? fields.flatMap((_, index) => Object.keys(companySchema.shape).map((key) => `companies.${index}.${key}`)) : field));

    form.trigger(fieldsToValidate as any).then((isValid) => {
      if (isValid) {
        if (step < steps.length - 1) {
          setStep(step + 1);
          setCompletedSteps([...completedSteps, step]);
        } else {
          form.handleSubmit(onSubmit)();
        }
      }
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-4xl mx-auto p-6 bg-background text-foreground">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Business Owner Onboarding</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Welcome to our IT services. Let&apos;s get to know you and your businesses.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 flex justify-between">
            {steps.map((s, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl
                    ${index <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
                    ${completedSteps.includes(index) ? "ring-2 ring-green-500" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                  {completedSteps.includes(index) && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
                <span className="mt-2 text-sm font-medium">{s.title}</span>
                {index < steps.length - 1 && <div className={`h-1 w-16 mt-2 ${index < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} transition={{ duration: 0.3 }}>
                  {currentFields.includes("firstName") && (
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  {currentFields.includes("mobileNumber") && (
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {currentFields.includes("email") && (
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {currentFields.includes("jobTitle") && (
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {currentFields.includes("companies") && (
                    <div className="space-y-4">
                      {fields.map((field, index) => (
                        <Collapsible key={field.id}>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" className="flex justify-between w-full">
                              <span>Company {index + 1}</span>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <Card>
                              <CardContent className="space-y-4 pt-4">
                                <FormField
                                  control={form.control}
                                  name={`companies.${index}.companyName`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Company Name</FormLabel>
                                      <FormControl>
                                        <Input {...field} className="bg-background" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`companies.${index}.companySize`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Company Size</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select company size" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="1-10">1-10 employees</SelectItem>
                                          <SelectItem value="11-50">11-50 employees</SelectItem>
                                          <SelectItem value="51-200">51-200 employees</SelectItem>
                                          <SelectItem value="201-500">201-500 employees</SelectItem>
                                          <SelectItem value="501+">501+ employees</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`companies.${index}.industry`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Industry</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select industry" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="technology">Technology</SelectItem>
                                          <SelectItem value="finance">Finance</SelectItem>
                                          <SelectItem value="healthcare">Healthcare</SelectItem>
                                          <SelectItem value="retail">Retail</SelectItem>
                                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                          <SelectItem value="education">Education</SelectItem>
                                          <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`companies.${index}.annualItBudget`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Annual IT Budget</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select annual IT budget" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                                          <SelectItem value="500k+">$500,000+</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`companies.${index}.primaryItChallenge`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Primary IT Challenge</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select primary IT challenge" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="security">Cybersecurity</SelectItem>
                                          <SelectItem value="cloudMigration">Cloud Migration</SelectItem>
                                          <SelectItem value="dataManagement">Data Management</SelectItem>
                                          <SelectItem value="itInfrastructure">IT Infrastructure</SelectItem>
                                          <SelectItem value="softwareDevelopment">Software Development</SelectItem>
                                          <SelectItem value="itSupport">IT Support</SelectItem>
                                          <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </CardContent>
                              <CardFooter>
                                <Button type="button" variant="destructive" onClick={() => remove(index)}>
                                  Remove Company
                                </Button>
                              </CardFooter>
                            </Card>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                      <Button type="button" variant="outline" onClick={() => append({ companyName: "", companySize: "", industry: "", annualItBudget: "", primaryItChallenge: "" })}>
                        Add Another Company
                      </Button>
                    </div>
                  )}
                  {currentFields.includes("howDidYouHearAboutUs") && (
                    <FormField
                      control={form.control}
                      name="howDidYouHearAboutUs"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select how you heard about us" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="search">Search Engine</SelectItem>
                              <SelectItem value="socialMedia">Social Media</SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="advertisement">Advertisement</SelectItem>
                              <SelectItem value="event">Event or Conference</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {currentFields.includes("additionalInfo") && (
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information or Specific Needs</FormLabel>
                          <FormControl>
                            <Textarea {...field} placeholder="Please provide any additional information or specific IT needs you have." className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {currentFields.includes("emailPreferences") && (
                    <FormItem>
                      <FormLabel>Email Preferences</FormLabel>
                      <div className="space-y-2">
                        <FormField
                          control={form.control}
                          name="emailPreferences.productUpdates"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Product Updates</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="emailPreferences.industryInsights"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Industry Insights</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="emailPreferences.promotionalOffers"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Promotional Offers</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </FormItem>
                  )}
                </motion.div>
              </AnimatePresence>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
            Previous
          </Button>
          <Button type="button" onClick={handleNextStep}>
            {step === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
