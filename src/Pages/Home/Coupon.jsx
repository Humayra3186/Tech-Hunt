import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { compareDesc, format, subDays } from "date-fns";
import { Autoplay, Pagination } from 'swiper/modules';

const Coupon = () => {

    const axiosPublic = useAxiosPublic()
    
    const[allCoupons , setCoupons] = useState([])
    useEffect(()=>{
        axiosPublic.get(`/coupons`)
        .then(res =>{
            const valid = res.data?.filter(data => new Date(data.exDate) >= new Date())
            setCoupons(valid)
        })
    },[])

    return (
        <div>
             <div className='flex flex-col items-center my-[5rem]'>
           <p className='text-center lemon px-8 rounded-2xl bg-[#a3cc4320] inline-block text-[0.8rem] mb-4 py-1'>Coupons</p>
           <h2 className='text-gray-800 font-semibold text-[2rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43]'>Coupons For Discount</h2>
           <p className='text-gray-500 text-[0.9rem] font-medium '>use coupons to get discount to get membership</p>
           </div>

           <Swiper
                                spaceBetween={30}
                                autoplay={{
                                    delay: 7000,
                                    disableOnInteraction: false,

                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                {
                                    allCoupons?.map(card =>

                                        <SwiperSlide className=' rounded-lg pb-6 '>


                                            <div className='w-[60%] mx-auto shadow-2xl mb-[5rem] '>

                                                <div>

                                                    <div className='flex items-center justify-center flex-col gap-4'>
                                                        <div className='w-32 h-32 rounded-full bg-[#a3cc43] flex justify-center  items-center font-bold text-white text-[3rem] '>
                                                        {card?.amount*100}%
                                                        </div>

                                                       

                                                       

                                                        <p className='font-bold text-[#111111] text-[2rem]'><span className='text-[#a3cc43]'>Code : </span> {card?.code}</p>
                                                    </div>
                                                   

                                                  
                                                    
                                                    <p className=' text-[2.2rem] my-2 text-center text-gray-800'>{card?.description} </p>

                                                    <p className='text-red-800 text-cenetr bg-[#f114142a] text-[2rem] text-center'>Expired In : {format((card?.exDate), 'P')}</p>
                                                   
                                                   


                                                </div>    </div> </SwiperSlide>
                                    )
                                }




                            </Swiper>
        </div>
    );
};

export default Coupon;