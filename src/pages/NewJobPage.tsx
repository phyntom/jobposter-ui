import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TagsInput from "../components/TagsInput";
import { useState } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const phoneValidator = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

const schema = z.object({
  title: z.string().min(5, { message: "Must be 5 or more characters long" }),
  type: z
    .string({
      required_error: "Contract type is required",
      invalid_type_error: "Contract type must be a string",
    })
    .nonempty(),
  location: z
    .string({
      required_error: "Location can't be empty",
      invalid_type_error: "Location must be a string",
    })
    .nonempty(),
  description: z
    .string({ required_error: "Description is required" })
    .min(50, { message: "Must be 50 or more characters long" }),
  salary: z.string().nonempty(),
  tags: z
    .string({
      required_error: "Skills tags are required",
      invalid_type_error: "Tags must be a string",
    })
    .array(),
  isRemote: z.boolean().optional(),
  postedAt: z.date().optional(),
  company: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be a string",
      })
      .min(5, { message: "Must be 5 or more characters long" }),
    description: z
      .string({
        invalid_type_error: "Description must be a string",
      })
      .min(30, { message: "Must be 20 or more characters long" }),
    contactEmail: z.string().email({ message: "Invalid email address" }),
    contactPhone: z
      .string()
      .regex(phoneValidator, { message: "Invalid phone number" }),
    website: z.string().url({ message: "Invalid website URL" }),
  }),
});
type JobIForm = z.infer<typeof schema>;

const types: Array<string> = [
  "Full Time",
  "Part Time",
  "Contract",
  "Freelance",
  "Internship",
];

export default function NewJob() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<JobIForm>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const [input, setInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const onSubmit: SubmitHandler<JobIForm> = async (data) => {
    data.postedAt = new Date();
    const res = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (input.trim() === "") return;
    if (e.code === "Space") {
      setTags([...tags, input]);
      setValue("tags", [input, ...tags]);
      setInput("");
    }
  };

  const onRemoveTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setValue("tags", [...newTags], { shouldValidate: true });
  };

  return (
    <div className="container mx-auto max-w-6xl py-14">
      <section className="flex flex-col gap-4 shadow-md px-8 py-4 border border-slate-300 rounded-md">
        <div className="space-y-1">
          <h3 className="text-xl font-medium">Job Details</h3>
          <p className="text-sm text-muted-foreground">
            Insert all the details related to the job you want to post.
          </p>
        </div>
        <Separator className="my-4" />
        <form
          className="flex flex-col gap-8 mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              {...register("title")}
              placeholder="Enter job title"
            />
            {errors.title?.message !== undefined ? (
              <p className="text-sm text-pink-600">{errors.title.message}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                This is the name that will be displayed on your profile and in
                emails.
              </p>
            )}
          </div>
          <div className="flex items-center justify-start flex-wrap gap-2">
            <div className="flex flex-col gap-4 grow-[1] shrink-1">
              <Label htmlFor="title">Contract Type</Label>
              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose contact type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Contract Type</SelectLabel>
                        {types.map((type, index) => (
                          <SelectItem value={type} key={`key-${index}`}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.type?.message !== undefined ? (
                <p className="text-sm text-pink-600">{errors.type.message}</p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  This endicates the type of contract this job is for
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 grow-[2] shrink-1">
              <Label htmlFor="email">Location</Label>
              <Input
                type="text"
                id="location"
                {...register("location")}
                placeholder="Enter job location"
              />
              {errors.location?.message !== undefined ? (
                <p className="text-sm text-destructive">
                  {errors.location.message}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Location' field specifies where the job will be based
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter your description"
              {...register("description")}
              rows={7}
            />
            {errors.description?.message !== undefined ? (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Provides a detailed overview of the job responsibilities,
                qualifications, or any information that applicants should know
                about the position
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="salary">Salary</Label>
            <Input
              type="text"
              id="salary"
              {...register("salary")}
              placeholder="Enter salary or range ex: 1500 - 2000"
            />
            {errors.salary?.message !== undefined ? (
              <p className="text-sm text-destructive">
                {errors.salary.message}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Please indicates the compensation or pay range for the job
                position
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="skills">Skills Tag</Label>
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.currentTarget.value);
              }}
              id="skills"
              type="text"
              placeholder="Enter skills tags"
              className="my-0"
              onKeyDown={handleKeyDown}
            />
            {errors.tags?.message !== undefined ? (
              <p className="text-sm text-destructive">{errors.tags?.message}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Please enter the skills tags ex: JavaScript, React, Node.js end
                press space to add
              </p>
            )}
            <TagsInput tags={tags} onRemoveTag={onRemoveTag} />
          </div>
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="isRemote"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote
            </label>
            <Controller
              control={control}
              name="isRemote"
              render={({ field: { onChange, value } }) => (
                <Checkbox onChange={onChange} checked={value} />
              )}
            />

            {errors.isRemote?.message !== undefined ? (
              <p className="text-sm text-destructive">
                {errors.isRemote.message}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                This job can be done remotely
              </p>
            )}
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h3 className="text-xl font-medium">Company Details</h3>
            <p className="text-sm text-muted-foreground">
              Insert all the details related to the job you want to post.
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 basis-1/2">
              <Label htmlFor="name">Company Name</Label>
              <Input
                type="text"
                id="name"
                {...register("company.name")}
                placeholder="Enter company name"
                autoComplete="off"
              />
              {errors?.company?.name?.message !== undefined ? (
                <p className="text-sm text-destructive">
                  {errors?.company?.name?.message}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  The of the hiringing company
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 basis-1/2">
              <Label htmlFor="name">Company Website</Label>
              <Input
                type="text"
                id="name"
                {...register("company.website")}
                placeholder="Enter company name"
              />
              {errors?.company?.name?.message !== undefined ? (
                <p className="text-sm text-destructive">
                  {errors?.company?.website?.message}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Enter the company website URL
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 basis-1/2">
              <Label htmlFor="name">Company Contact Email</Label>
              <Input
                type="text"
                {...register("company.contactEmail")}
                className="flex-1"
              />
              {errors?.company?.contactEmail?.message !== undefined ? (
                <p className="text-sm text-destructive">
                  {errors?.company?.contactEmail?.message}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Enter the company contact email to reach out
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 basis-1/2">
              <Label htmlFor="name">Company Phonenumer</Label>
              <Input
                type="tel"
                {...register("company.contactPhone")}
                className="flex-1"
              />
              {errors?.company?.contactPhone?.message !== undefined ? (
                <p className="text-sm text-destructive">
                  {errors?.company?.contactPhone?.message}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Enter company contact phone
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 basis-1">
            <Label htmlFor="name">Company Description</Label>
            <Textarea
              {...register("company.description")}
              placeholder="Enter company description"
            />
            {errors?.company?.description?.message !== undefined ? (
              <p className="text-sm text-destructive">
                {errors?.company?.description?.message}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Enter what the company does and what it's about
              </p>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
}
