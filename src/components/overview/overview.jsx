import React from 'react';
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'

const Overview = () => {
    const images = [image1, image2, image3];
    
    return (
        <section id="overview" className='pb-4 flex flex-col md:flex-row justify-center items-center space-x-10'>
            {/* column 1 */}
            <div className='px-9 md:w-1/2 md:max-w-md'>
            <h1 className='text-start text-[10vh] font-light font-bitter text-[#fddc5c] glow'>Overview</h1>
                <Accordion type="single" collapsible className='font-bitter'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='font-bold'>What is the DCISM Lumina Divina?</AccordionTrigger>
                        <AccordionContent>
                        The DCISM Lumina Divina, also known as the DCISM General Assembly 2024, is the biggest and most glamorous party of the school year held by the Computer and Information Sciences Council (CISCO). This event, formerly known as the “DCISM Acquaintance Party”, is a chance to mingle with the DCISM students and faculty from all levels and backgrounds. The event will have various surprises that will make the night unforgettable for everyone.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='font-bold'>When and Where is the event held?</AccordionTrigger>
                        <AccordionContent>
                            The event will be held on February 11, 2023 at The Event Space, F. Cabahug St., Panagdait, Mabolo, Cebu City. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='font-bold'>How can I join the event?</AccordionTrigger>
                        <AccordionContent>
                            To join this event, you will be required to go through the registration form. You may click on the multiple links around the website or <a href="https://bit.ly/DCISMLuminaDivina">click here</a>!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            {/* column 2 - carousel goes here */}
            <div className='md:w-1/2 md:max-w-lg'>
                <Carousel className="w-full max-w-md">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="bg-black flex aspect-square items-center justify-center p-6">
                                            <img src={image} alt={`Carousel ${index + 1}`} className="object-cover w-full h-full" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='bg-black'/>
                    <CarouselNext className='bg-black'/>
                </Carousel>
                <h4 className='italic ml-[8vh] text-[0.8em]'>Credits to the original owner/photographer of these photos.</h4>
            </div>
        </section>
    )
};

export default Overview;
