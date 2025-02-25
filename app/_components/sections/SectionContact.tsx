
/* eslint-disable react/react-in-jsx-scope */
"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Frame } from "../Frame";
import { SectionWithTitle } from "../SectionWithTitle";

import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { AnimateDiv } from "../AnimateDiv";

export const SectionContact = () => {
    const { content } = useLanguage();
    const desc = content();
    const { theme } = useTheme();

    const suffixe = theme !== 'dark' ? 'light' : 'dark';
    const pic1 = theme !== 'dark'
        ? { src: "/img/picprofil1_light.png", alt: "Pic1 light" }
        : { src: "/img/picprofil1_dark.png", alt: "Pic1 dark" };
    //définition du schéma du formulaire de contact
    const formSchema = z.object({
        name: z.string().min(3, { message: desc.error.toShort }).max(255, { message: desc.error.toLong }),
        email: z.string().email({ message: desc.error.emailInvalid }),
        object: z.string().min(3, { message: desc.error.toShort }).max(255, { message: desc.error.toLong }),
        message: z.string().min(10, { message: desc.error.toShort })
    });
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            object: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // todo
        console.log(values)
    }
    return (
        <AnimateDiv>
            <SectionWithTitle title={desc.titleItem.contact} id="sectionContact">
                <div className="grid min-h-36 grid-cols-2 grid-rows-1">
                    <div className="relative ">
                        <Frame className=" absolute bottom-0 left-0 border-b-8 border-l-8"></Frame>
                        <div className="p-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
                                    <div className="grid grid-cols-2 grid-rows-3 gap-x-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="pl-4">{desc.contactLabel.form.name.text} </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={desc.contactLabel.form.name.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="pl-4">{desc.contactLabel.form.email.text} </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={desc.contactLabel.form.email.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="object"
                                            render={({ field }) => (
                                                <FormItem className="col-span-2 space-y-0">
                                                    <FormLabel className="pl-4">{desc.contactLabel.form.object.text} </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={desc.contactLabel.form.object.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                    <FormLabel className="pl-4">{desc.contactLabel.form.message.text}</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder={desc.contactLabel.form.message.placeholder}
                                                            className="resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        /></div>
                                    <div className="flex items-end justify-end">
                                        <Button type="submit" className="min-w-40">{desc.contactLabel.form.button} </Button></div>
                                </form>
                            </Form>
                        </div>
                    </div>
                    <div className="relative">
                        <Frame className=" absolute right-0 top-0 border-r-8 border-t-8"></Frame>
                        <div className="relative p-10">
                            <img src={pic1.src} alt={pic1.alt} className="absolute bottom-0 right-0 h-[250px]" />

                            <div className="relative flex w-fit flex-col bg-[linear-gradient(135deg,var(--accent-foreground)_20%,var(--primary)_40%,var(--destructive)_67%,var(--secondary)_100%)] bg-clip-text font-karantina text-8xl text-transparent" >
                                <span className="w-fit">{desc.contactLabel.query[0]}</span>
                                <span className="w-fit">{desc.contactLabel.query[1]} </span>
                            </div>
                            <div className="relative flex items-center gap-6 pt-10">
                                {desc.contactInfo.map((elt, key) => {
                                    return <a key={key} className=" w-fit rounded-lg p-2 hover:border-b-2 hover:border-primary"  href={elt.link}> <img src={`/img/${elt.icon}_${suffixe}.png`} alt={elt.icon} /> </a>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </SectionWithTitle>
        </AnimateDiv>)
}
