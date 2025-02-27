"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Plus, Trash2 } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Pack } from "@/types"

interface EditPackDialogProps {
  pack: Pack
  open: boolean
  onOpenChange: (open: boolean) => void
}

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  imageUrl1: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  imageUrl2: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  prompts: z
    .array(
      z.object({
        id: z.string().optional(),
        prompt: z.string().min(1, "Prompt is required"),
        imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
      }),
    )
    .min(1, "At least one prompt is required"),
})

type FormValues = z.infer<typeof formSchema>

export function EditPackDialog({ pack, open, onOpenChange }: EditPackDialogProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: pack.id,
      name: pack.name,
      description: pack.description,
      imageUrl1: pack.imageUrl1,
      imageUrl2: pack.imageUrl2,
      prompts: pack.prompts.map((prompt) => ({
        id: prompt.id,
        prompt: prompt.prompt,
        imageUrl: prompt.imageUrl || "",
      })),
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      updatePack(values)
      toast({
        title: "Success",
        description: "Pack updated successfully",
      })
      onOpenChange(false)
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update pack",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Pack</DialogTitle>
          <DialogDescription>Update pack details and prompts.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Pack name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Pack description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="imageUrl1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL 1</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL 2</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Prompts</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => form.setValue("prompts", [...form.getValues("prompts"), { prompt: "", imageUrl: "" }])}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Prompt
                </Button>
              </div>

              {form.watch("prompts").map((_, index) => (
                <div key={index} className="p-4 border rounded-md space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Prompt {index + 1}</h4>
                    {form.watch("prompts").length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const currentPrompts = form.getValues("prompts")
                          form.setValue(
                            "prompts",
                            currentPrompts.filter((_, i) => i !== index),
                          )
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                  <FormField
                    control={form.control}
                    name={`prompts.${index}.prompt`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prompt Text</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter prompt text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`prompts.${index}.imageUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prompt Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/image.jpg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Pack"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

