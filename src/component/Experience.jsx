import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.jpeg'
import icon3 from '../assets/icon3.jpg'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'


const Experience = () => {

    const exp=[
        {
            id:1,
            src:icon1,
            title:"Customized Approach",
            desc:"At Digital Diaries,we provide ourselves on our customized approach to web development. Understanding that every business is unique, we tailor our solutions to meet your specific needs and objectives. Our team works closely with you to design and develop a website that not only reflects your brand but also engages your audience and drives success."
           

        },
        {
            id:2,
            src:icon2,
            title:"Result Driven Solutions",
            desc:"we deliver result-driven software solutions that propel your business forward. Our team combines expertise with cutting-edge technology to create tailored applications that meet your specific goals and drive measurable success. Trust us to transform your vision into impactful, high-performance solutions."
           

        },
        {
            id:3,
            src:icon3,
            title:"Responsive Design",
            desc:"we specialize in responsive design to ensure your website looks and functions perfectly on any device. Our approach guarantees a seamless and engaging user experience across desktops, tablets, and smartphones, enhancing accessibility and user satisfaction."
           

        },
        {
            id:1,
            src:icon4,
            title:"Delivery on Time",
            desc:"we are committed to delivering projects on time, every time. Our meticulous planning and efficient processes ensure timely completion without compromising quality, helping you stay on schedule and achieve your business objectives."
           

        },
        {
            id:5,
            src:icon5,
            title:"Domain and Hosting",
            desc:"we provide reliable domain registration and hosting services to ensure your website is always accessible and secure. Our comprehensive solutions offer seamless setup, robust performance, and 24/7 support, giving you peace of mind and a solid foundation for your online presence."

        },
        {
            id:3,
            src:icon6,
            title:"Business Orineted Packages",
            desc:"we offer business-oriented packages designed to meet your unique needs and drive growth. Our tailored solutions include comprehensive services that align with your objectives, providing the tools and support necessary for your success. Partner with us to unlock your business's full potential."

        },

        
    ]
  return (
    
            <div name="service" className="bg-gradient-to-b from-gray-800 to-black  w-full text-white md:h-screen ">
           <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
               <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Services</p>
                <p className="py-6">Why DigitalDiaries?</p>
                <p className='py-5'>Our Expertise and Commitment to Your Success Sets Us Apart.</p>
               </div>

               <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                 {
                    exp.map(({id,src,title,desc})=>(
                        <div key={id} className="shadow-lg hover:scale-105 duration-500 py-2 rounded-lg border-2 border-sky-500 m-3 p-10 pt-5">
                        <img src={src} alt="icons"  className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                        <p className="mt-4">{desc}</p>
                    </div>
                    ))
                 }

               
               </div>
           </div>
    </div>
  )
}

export default Experience