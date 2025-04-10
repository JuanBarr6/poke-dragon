"use client"

import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";

import {Button} from "@/components/ui/button";
import LabelField from "@/features/shared/components/forms/label-field";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
})

export default function Page(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            lastName: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
            <LabelField title="Name"  controlName="username" />
            <LabelField title="Last Name"  controlName="lastName" />

            <Button type="submit">Submit</Button>
        </form>
    </Form>
}
