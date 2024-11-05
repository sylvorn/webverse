"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, PlusCircle, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { javascript } from "@codemirror/lang-javascript";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import FormError from "@/sections/auth/form-error";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import newService from "@/actions/new-service";
import CodeMirror from "@uiw/react-codemirror";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newServiceSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import * as z from "zod";
import AddCategoryDialog from "../new-category-form/newCategoryForm";

type FormData = z.infer<typeof newServiceSchema>;

const steps = ["Basic Details", "Features", "Plans"];

export default function NewServiceForm({
  categories,
}: {
  categories: {
    id: string;
    name: string;
  }[];
}) {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(newServiceSchema),
    defaultValues: {
      features: [{ title: "", content: "<>Have only 1 parent element</>" }],
      plans: [{ name: "", description: "", price: 0, duration: 1 }],
    },
  });

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  const {
    fields: planFields,
    append: appendPlan,
    remove: removePlan,
  } = useFieldArray({
    control,
    name: "plans",
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    console.log(data);
    startTransition(async () => {
      try {
        const result = await newService(data);
        if (result.error) {
          setError(result.error);
        } else if (result.success) {
          router.push("/admin/services/new");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    });
  };

  const handleNext = async () => {
    const fieldsToValidate = currentStep === 0 ? ["title", "description", "categoryId"] : currentStep === 1 ? ["features"] : ["plans"];

    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{index + 1}</div>
              <span className="ml-2 text-sm font-medium">{step}</span>
              {index < steps.length - 1 && <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </div>
      {error && <FormError message={error} />}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title")} className="max-w-md" />
                {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register("description")} className="max-w-md" />
                {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoryId">Category</Label>

                <Controller
                  name="categoryId"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="max-w-md">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <AddCategoryDialog />
                {errors.categoryId && <p className="text-destructive text-sm">{errors.categoryId.message}</p>}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              {featureFields.map((field, index) => (
                <Card key={field.id} className="mb-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Feature {index + 1}</CardTitle>
                    {index > 0 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeFeature(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Input {...register(`features.${index}.title` as const)} placeholder="Feature Title" />
                      {errors.features?.[index]?.title && <p className="text-destructive text-sm">{errors.features[index]?.title?.message}</p>}
                      <Controller
                        name={`features.${index}.content` as const}
                        control={control}
                        render={({ field }) => (
                          <CodeMirror
                            value={field.value}
                            extensions={[javascript({ jsx: true })]}
                            onChange={(value) => field.onChange(value)}
                            className="border rounded-md"
                            basicSetup={{
                              lineNumbers: false,
                              foldGutter: false,
                            }}
                            style={{
                              fontSize: "14px",
                            }}
                          />
                        )}
                      />
                      {errors.features?.[index]?.content && <p className="text-destructive text-sm">{errors.features[index]?.content?.message}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendFeature({ title: "", content: "<>Please Have only 1 parent element</>" })}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Plans</CardTitle>
            </CardHeader>
            <CardContent>
              {planFields.map((field, index) => (
                <Card key={field.id} className="mb-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Plan {index + 1}</CardTitle>
                    {index > 0 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => removePlan(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Input {...register(`plans.${index}.name` as const)} placeholder="Plan Name" />
                      {errors.plans?.[index]?.name && <p className="text-destructive text-sm">{errors.plans[index]?.name?.message}</p>}
                      <Textarea {...register(`plans.${index}.description` as const)} placeholder="Plan Description" />
                      {errors.plans?.[index]?.description && <p className="text-destructive text-sm">{errors.plans[index]?.description?.message}</p>}
                      <Input type="number" {...register(`plans.${index}.price` as const, { valueAsNumber: true })} placeholder="Price" />
                      {errors.plans?.[index]?.price && <p className="text-destructive text-sm">{errors.plans[index]?.price?.message}</p>}
                      <Input type="number" {...register(`plans.${index}.duration` as const, { valueAsNumber: true })} placeholder="Duration (in months)" />
                      {errors.plans?.[index]?.duration && <p className="text-destructive text-sm">{errors.plans[index]?.duration?.message}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendPlan({ name: "", description: "", price: 0, duration: 1 })}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Plan
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between">
          <Button type="button" onClick={handlePrevious} disabled={currentStep === 0}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" disabled={isPending || isSubmitting}>
              {(isPending || isSubmitting) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
