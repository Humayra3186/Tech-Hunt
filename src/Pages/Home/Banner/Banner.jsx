import React from 'react';
import "./Banner.css"
import bg01 from "../../../assets/img/bg01.png"
import bg02 from "../../../assets/img/bg02.png"
import bg03 from "../../../assets/img/bg03.png"
import bg04 from "../../../assets/img/764-7642823_m-logo-website-templates-hd-png-download-removebg-preview.png"
import banner from "../../../assets/img/banner.jpg"
import { Fade } from 'react-awesome-reveal';



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`,
        }} className='w-full clip  bg-fixed bg-center bg-cover bg-no-repeat'>

            <Swiper
             spaceBetween={30}
             pagination={{
               clickable: true,
             }}
             autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
             modules={[Autoplay,Pagination]}
             className="mySwiper"
             
              
            >

                {/* slide o1 */}
                <SwiperSlide>
                    <div className='lg:h-[40rem] pt-[5rem]  w-[85%] mx-auto lg:flex items-center justify-center gap-4'>

                        <div className='pt-[3rem] lg:pt-0 lg:w-[45%]          '>
                            <Fade triggerOnce={false}  delay={0.2}>
                                <h1 className='text-[3rem] leading-[4rem] text-black  font-bold'>Innovative <span className='text-[#69a533] text-[3.3rem]'>Web </span><br /> Solutions</h1>

                            </Fade>
                            <Fade triggerOnce={false}  delay={0.8}>
                                <p className='text-gray-600 my-3 text-[1rem]'>
                                    Empower your business with cutting-edge web applications tailored for seamless performance and user experience.
                                </p>
                                <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button>
                            </Fade>

                        </div>
                        <div className='w-[70%] mx-auto lg:w-[55%]  pb-[2rem] lg;pb-0 '>
                            <img className='h-auto w-full' src={bg01} alt="" />
                        </div>

                    </div>
                </SwiperSlide>


                {/* slide o2*/}
                <SwiperSlide>
                    <div className='lg:h-[40rem] pt-[5rem]  w-[85%] mx-auto lg:flex items-center justify-center gap-4'>

                        <div className=' pt-[3rem] lg:pt-0 lg:w-[45%]          '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[3rem] leading-[4rem] text-black  font-bold'>
                                Dynamic  <span className='text-[#69a533] text-[3.3rem]'>Mobile </span><br />  Apps</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-gray-600 my-3 text-[1rem]'>
                                Build connections on the go with intuitive and feature-rich mobile applications designed to engage users and elevate your brand.


                                </p>
                                <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button>
                            </Fade>

                        </div>
                        <div className='w-[70%] mx-auto lg:w-[55%]  pb-[2rem] lg;pb-0  '>
                            <img className='h-auto w-full' src={bg02} alt="" />
                        </div>

                    </div>
                </SwiperSlide>

                {/* slide o3 */}
                <SwiperSlide>
                    <div className='lg:h-[40rem] pt-[5rem]  w-[85%] mx-auto lg:flex items-center justify-center gap-4'>

                        <div className=' pt-[3rem] lg:pt-0 lg:w-[45%]          '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[3rem] leading-[4rem] text-black  font-bold'>
                                Custom  <span className='text-[#69a533] text-[3.3rem]'>Software  </span><br /> Development</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-gray-600 my-3 text-[1rem]'>
                                Experience bespoke software solutions crafted to streamline operations, enhance productivity, and meet your unique business needs.


                                </p>
                                <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button>
                            </Fade>

                        </div>
                        <div className='w-[70%] mx-auto lg:w-[55%]  pb-[2rem] lg;pb-0 '>
                            <img className='h-auto w-full' src={bg04} alt="" />
                        </div>

                    </div>
                </SwiperSlide>

                {/* slide o4 */}
                <SwiperSlide>
                    <div className='lg:h-[40rem] pt-[5rem]  w-[85%] mx-auto lg:flex items-center justify-center gap-4'>

                        <div className=' pt-[3rem] lg:pt-0 lg:w-[45%]          '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[3rem] leading-[4rem] text-black  font-bold'> Smart   <span className='text-[#69a533] text-[3.3rem]'>Digital </span><br /> Transformation</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-gray-600 my-3 text-[1rem]'>
                                Accelerate growth with comprehensive digital tools, including web apps, mobile platforms, and enterprise-grade software, all designed for modern businesses.
                                </p>
                                <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button>
                            </Fade>

                        </div>
                        <div className='w-[70%] mx-auto lg:w-[55%]  pb-[2rem] lg;pb-0 '>
                            <img className='h-auto w-full' src={bg03} alt="" />
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>



        </div>
    );
};

export default Banner;