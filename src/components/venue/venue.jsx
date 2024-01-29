import React from "react";

import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import image1 from '../../assets/venueimg1.jpg'
import image2 from '../../assets/venueimg2.jpg'
import image3 from '../../assets/venueimg3.jpg'

const Venue = () => {
    const images = [image1, image2, image3];
    return(
        <section id="venue" className='pb-4 flex flex-col md:flex-row justify-center items-center space-x-10'>
            {/* Column 1 - Info */}
            <div className='px-9 md:w-1/2 md:max-w-md'>
                <h1 className='text-start text-[7vh] md:text-[10vh] font-light font-bodoni text-[#fddc5c] glow'>Venue</h1>
                <Separator className="my-4 bg-white" />
                <h4 className="my-4 italic font-bitter text-[#fddc5c] glow">The • Event • Space</h4>
                <p className="font-bitter">
                The Event Space is a permanent tent that is fully air conditioned, beautifully designed, and really spacious. It is located at F. Cabahug St. Panagdait, Mabolo, 6000 Cebu City. It can host various events, such as weddings, birthdays, seminars, and more.
                <br/>
                <br/>
                Check them out by <a className="text-[#fddc5c]" href="https://www.facebook.com/TheEventSpaceCebu/">clicking here</a>!
                </p>
            </div>

            {/* Column 2 - Carousel */}
            <div className='md:w-1/2 md:max-w-lg'>
                <Carousel className="w-full max-w-md">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 animate-fade-in">
                                    <Card>
                                        <CardContent className="bg-black flex aspect-square items-center justify-center p-6">
                                            <img src={image} alt={`Carousel ${index + 1}`} className="object-cover w-full h-full" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='bg-black' />
                    <CarouselNext className='bg-black' />
                </Carousel>
                <h4 className='italic mr-[10vh] text-center text-[0.8em]'>Credits to the original owner/photographer of these photos.</h4>
            </div>
        </section>
    )
}

export default Venue;