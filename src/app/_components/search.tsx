"use client"

import { SearchIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const searchSchema = z.object({
  title: z.string().trim().min(1),

})

const Search = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      title: "",
    },
  })
  const router = useRouter()

  const handleSearch = (data: z.infer<typeof searchSchema>) => {
    router.push(`/barbershops?title=${data.title}`)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSearch)} className="flex gap-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Faça sua busca..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
            <SearchIcon />
          </Button>
        </form>
      </Form>
    </>
  )
}

export default Search
