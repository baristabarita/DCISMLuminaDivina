import React from "react";
import { Card } from "../ui/card";
import image1 from '../../assets/themeimg1.png'
import image2 from '../../assets/themeimg2.png'
import backgroundimg from '../../assets/themebg2.png'
const Theme = () => {
    return(
        <Card className="flex w-full bg-cover bg-center" style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className="w-1/3">
                <img src={image1} alt="Theme 1" className="w-3/4 shadow-lg"/>
            </div>
            <div className="w-1/3 px-4">
                <h1 className="text-xl font-bold mb-2">Theme</h1>
                <p className="text-base text-gray-600">Your description here</p>
            </div>
            <div className="w-1/3">
                <img src={image2} alt="Theme 2" className="w-3/4 shadow-lg"/>
            </div>
        </Card>
    )
}

export default Theme;
