import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import bg from "../assets/img/add bg.jpg"
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useUser from '../Hooks/useUser';
import { useNavigate } from 'react-router-dom';




const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState("")
    const {payment,user,setPayment} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [clientSecret,setClientSecret] = useState("")
    const price = payment
    const userInfo = useUser()
    const newData = {newStatus : true}
    const navigate = useNavigate()
    const [loader , setLoader] = useState(false)


    useEffect(()=>{


      axiosSecure.post("/create-payment-intent" , {price})
      .then(res =>{
        
        setClientSecret(res.data?.clientSecret)
      })

    },[axiosSecure,price])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoader(true)
        
        
        if (!stripe || !elements) {
           
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
        
            setError(error.message)
          } else {
          
            setError("")
          }


          //conform payment

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email:user?.email || 'anonymous',
                    name:user?.displayName || 'anonymous'
                }
            }
        })

        if (paymentIntent?.status === 'succeeded') {
          setPayment(200)
          setLoader(false)
          
          axiosSecure.patch(`/update/status/${user?.email}`,newData)
          .then(res=>{
            if(res.data?.modifiedCount>0){
              toast.success("successfully get the membership")
              navigate("/dashboard/profile")
              setPayment(200)
              console.log(res.data)
            }
          })
          

      }
        
       
        else {
            
          if (confirmError) {
            console.log('confirm error')
        }
           
          }
        
      
    }
    return (
      
     
        <>
        {
          loader && <p className='text-[1.2rem] font-semibold text-center my-6'>Please wait for 1 minute...</p>
        }
        <div style={{
                   backgroundImage: `url(${bg})`,
               }}  className='relative md:w-[60%] lg:w-[40%] h-[12rem] py-4 mx-auto  bg-center bg-cover bg-no-repeat rounded-md'>
         <form className=' w-full h-full'  onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#ffffff',
              '::placeholder': {
                color: '#ffffff',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className=' absolute bottom-4  '>
     <button className='px-4 py-1 ml-4 bg-white rounded-md text-[#69a533] ' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button> 
      <p className='text-red-800 text-[0.8rem] ml-4'>{error}</p>
     </div>
     
    </form>
       </div></>
     
     
       
    );
};

export default CheckoutForm;