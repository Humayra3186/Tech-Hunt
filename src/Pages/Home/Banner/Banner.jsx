import React from 'react';
import "./Banner.css"
import bg01 from "../../../assets/img/product.jpg"
import bg02 from "../../../assets/img/detail.webp"
import bg03 from "../../../assets/img/probg.webp"
import bg04 from "../../../assets/img/de.webp"
import banner from "../../../assets/img/banner.jpg"
import { Fade } from 'react-awesome-reveal';



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='w-full clip  overflow-hidden '>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"


            >

                {/* slide o1 */}
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${bg01})`,
                    }} className='h-[30rem] md:h-[37rem] lg:h-[36rem] mx-auto lg:flex items-center justify-center gap-4 bg-center bg-no-repeat bg-cover bg-fixed'>

                       <div className='w-full h-full bg-[#1a1a1bba] '>
                       <div className='h-full flex flex-col justify-center  lg:w-[85%]   mx-auto pt-[2rem]      '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[2.3rem] md:text-[4rem] text-center md:leading-[5rem] text-white play  font-semibold mb-2'>Innovative And Exciting <br /> <span className='text-[#a3cc43] '>Web </span> Solutions</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-[#ffffffae] my-3 text-[0.9rem] w-[70%] mx-auto md:text-[1.1rem] font-light text-center'>
                                    Empower your business with cutting-edge web applications tailored for seamless <br />performance and user experience.
                                </p>
                                <div className='flex justify-center'>
                               <Link to={"products"}> <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button></Link>
                                </div>
                            </Fade>

                        </div>
                       </div>
                      

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${bg02})`,
                    }} className='h-[30rem] md:h-[37rem] lg:h-[36rem] mx-auto lg:flex items-center justify-center gap-4 bg-center bg-no-repeat bg-cover bg-fixed'>

                       <div className='w-full h-full bg-[#1a1a1bba] '>
                       <div className='h-full flex flex-col justify-center  lg:w-[85%]   mx-auto pt-[2rem]      '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[2.3rem] md:text-[4rem] text-center md:leading-[5rem] text-white play  font-semibold mb-2'>Dynamic And Simple <br /> <span className='text-[#a3cc43] '>Mobile </span> Apps</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-[#ffffffae] my-3 text-[0.9rem] w-[70%] mx-auto md:text-[1.1rem] font-light text-center'>
                                Build connections on the go with intuitive and feature-rich mobile applications designed to engage users and elevate your brand.
                                </p>
                                <div className='flex justify-center'>
                               <Link to={"products"}> <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button></Link>
                                </div>
                            </Fade>

                        </div>
                       </div>
                       

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${bg03})`,
                    }} className='h-[30rem] md:h-[37rem] lg:h-[36rem] mx-auto lg:flex items-center justify-center gap-4 bg-center bg-no-repeat bg-cover bg-fixed'>

                       <div className='w-full h-full bg-[#1a1a1bba] '>
                       <div className='h-full flex flex-col justify-center  lg:w-[85%]   mx-auto pt-[2rem]      '>
                            <Fade triggerOnce={false} delay={0.2}>
                                <h1 className='text-[2.3rem] md:text-[4rem] text-center md:leading-[5rem] text-white play  font-semibold mb-2'>Custom And Useful <br /> <span className='text-[#a3cc43] '>Software </span> Development</h1>

                            </Fade>
                            <Fade triggerOnce={false} delay={0.8}>
                                <p className='text-[#ffffffae] my-3 text-[0.9rem] w-[70%] mx-auto md:text-[1.1rem] font-light text-center '>
                                Experience bespoke software solutions crafted to streamline operations, enhance productivity, and meet your unique business needs.
                                </p>
                                <div className='flex justify-center'>
                               <Link to={"products"}> <button className='btn-color py-1 px-6 mt-5 '>Let's Explore</button></Link>
                                </div>
                            </Fade>

                        </div>
                       </div>
                       

                    </div>
                </SwiperSlide>


                {/* slide o2
                

                {/* slide o3 
                

                {/* slide o4 
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
                </SwiperSlide> */}

            </Swiper>



        </div>
    );
};

export default Banner;