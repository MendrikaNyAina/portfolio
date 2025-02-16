/* eslint-disable react/react-in-jsx-scope */
"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
export const Logo = () => {
    const { theme } = useTheme();

    const img = theme !== 'dark'
        ? { src: "/img/logo_light_icon.png", alt: "Logo light" } // Chemin vers l'image pour le thème sombre
        : { src: "/img/logo_dark_icon.png", alt: "Logo dark" };
    console.log(theme)
    // console.log(mounted)
    return (
        <Button variant="logo" size="logo">
            <img src={img.src} alt={img.alt} className="h-13 block" />
        </Button>
    )
}
