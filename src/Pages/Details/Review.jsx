import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import ReactStars from 'react-stars';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Review = ({ proId }) => {

    const axiosPublic = useAxiosPublic()

    
    //get reviews

    const { data: reviews, refetch: reload } = useQuery({
        queryKey: ['reviews', proId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/review/${proId}`)
            return res.data
        }

    })

    return (
        <div className='w-[85%] md:w-[70%] my-[4rem] mx-auto '>

            {
                reviews?.length === 0 ? <>

                    <div className='w-full h-[20rem] bg-base-200 flex justify-center items-center'>

                        <div>
                            No Review!
                        </div>

                    </div>

                </> : <>
                    <div className='w-full mx-auto mb-8 '>

                        

                        <div className='shadow-lg border'>


                            {/* title */}




                            <Swiper
                                spaceBetween={30}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,

                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                {
                                    reviews?.map(card =>

                                        <SwiperSlide className=' rounded-lg pb-6 '>


                                            <div className='w-full   px-8'>

                                                <div>

                                                    <div className='flex items-center my-12 gap-4'>
                                                        <div className='w-10 h-10 '>
                                                            <img className='w-full h-full rounded-full' src={card?.photo} alt="" />
                                                        </div>

                                                        <p className='font-bold text-[#111111]'>{card?.name}</p>
                                                    </div>

                                                    {/* star */}
                                                    <div className='flex gap-1 text-[#f7921e] pb-4'>
                                                        <ReactStars
                                                            count={5}
                                                            value={card?.rate}
                                                            size={24}
                                                            color2={'#ffd700'} />
                                                    </div>
                                                    <FaQuoteLeft className='text-[#a3cc43] text-[2rem]'></FaQuoteLeft>
                                                    <p className='py-3'>{card?.comment} </p>
                                                    <div className='flex justify-end'>
                                                        <FaQuoteRight className='text-[#a3cc43] text-[2rem]'></FaQuoteRight>
                                                    </div>


                                                </div>    </div> </SwiperSlide>
                                    )
                                }




                            </Swiper>




                        </div>


                    </div ></>
            }

        </div>
    );
};

export default Review;