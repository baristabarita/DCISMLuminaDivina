import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import image from '../../assets/themeimg.png'
const Theme = () => {
    return (
        <section id="theme" className='pb-4 flex flex-col md:flex-row justify-center items-center space-x-10'>
            {/* column 1 - img goes here */}
            <div className='md:w-1/2 md:max-w-md'>
                <Card>
                    <CardContent className="bg-black flex aspect-square items-center justify-center p-6">
                        <img src={image} className="object-cover w-full h-full animate-fade-in" />
                    </CardContent>
                </Card>
            </div>
            {/* column 2 - info here */}
            <div className='px-9 md:w-1/2 md:max-w-md'>
                <h1 className='text-start text-[7vh] md:text-[10vh] font-light font-bodoni text-[#fddc5c] glow'>Theme</h1>
                <Separator className="my-4 bg-white" />
                <h4 className="my-4 italic font-bitter text-[#fddc5c] glow">Divinity • Heavenly • Ethereal • Deities</h4>
                <p className="font-bitter">
                Lumina Divina, the theme of the DCISM General Assembly 2024, where the night sky comes alive with divine radiance. The earthly and divine converge in a luminous soiree as the venue transforms into a sanctuary of shimmering stars and golden hues. Here, revel in what transcends the ordinary and dance beneath the celestial heavens.
                </p>
            </div>
        </section>
    )
}

export default Theme;
