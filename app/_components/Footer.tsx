"use client"
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { toast } from "sonner";


/* eslint-disable react/react-in-jsx-scope */
export const Footer = () => {
    const { content } = useLanguage();
    const { theme } = useTheme();
    const suffixe = theme !== 'dark' ? 'light' : 'dark';
    const desc = content();

    const handleCopy=async(text:string)=>{
        try{
            console.log(text)
            await navigator.clipboard.writeText(text);
            toast(desc.copy)
        }catch(err){
            // console.log(err)
            toast(desc.error.cantCopy)
        }
        
    }
    return <section className="relative m-auto flex w-full max-w-[1400px] items-center justify-between px-8 py-10 text-sm text-accent-foreground ">
        <div className="absolute right-0" ><Toaster /></div> 
        <p>Copyright 2025</p>
        <div className=" flex items-center gap-2 ">
            {desc.contactInfo.map((elt, key) => {
                return <button key={key} className=" w-10  rounded-lg p-1 hover:border-2 hover:border-primary" onClick={()=>handleCopy(elt.info)} > <img src={`/img/${elt.icon}_${suffixe}.png`} alt={elt.icon} /> </button>
            })}
        </div>
        
    </section>
}