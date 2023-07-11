import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router"
import axios from "axios";
import FootballImg from '/images/football.png'
import { FaFacebookF } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiFillApple } from 'react-icons/ai'
import { Input } from "./Input";
import { AuthButton } from "./AuthButton";
import { OAuthButton } from "./OAuthButton";
import { useState } from "react";

export const AuthForm = () => {
    const[message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        
      })

    const router = useRouter()
   const handleInputchange = (e)=>{
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = 'https://tasty-duck-coveralls.cyclic.app/v1/admin/login';
          const response = await axios.post(url, formData);
          console.log(response.data);
          console.log(response.data.token);
          const token = response.data.token
          sessionStorage.setItem('jwtToken', token);
          setMessage(response.data.message)
          setTimeout(() => {
            setMessage('')
          }, 5000)
          console.log(response.data.message)
        // Handle the response as needed
        // Reset form data if needed
        // setFormData({
        // date: '',
        // time: '',
        // league: '',
        // match: '',
        // odds: '',
        // tip: '',
        // scores: ''
        // });
    
          router.push('/freetip')
        } catch (error) {
          console.error('Error:', error);
          console.log(error.message)
          if (error.message) {
            setError(error.message)
            setTimeout(() => {
              setError(null);
            }, 5000);
          } else {
            setError('An error occured please try again later')
            setTimeout(() => {
              setError(null);
            }, 5000);
          }
    
        }}

    return (
        <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36">
            <div className="md:col-span-6">
                <div className='pt-4'>
                    <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">Sign In</span></h2>
                    {/* <p className='text-center mt-3'>Sign {signup ? 'up' : 'in'} to get started</p> */}
                </div>

                <div className="py-6">
                 <form onSubmit={handleSubmit}>
                 <Input placeholder='Enter Email' type='email' name='email' value={formData.email} onChange={handleInputchange} />
                    <Input placeholder='Enter Password' type='password'  name='password' value={formData.password} onChange={handleInputchange} />
                    {/* {
                        !!!signup &&
                        <div className="text-right mb-4">
                            <Link href='/auth/reset-password' className="hover:text-app-sky">Forgotten Password?</Link>
                        </div>
                    } */}
                    <AuthButton>Sign In</AuthButton>
                 </form>
                </div>

                {/* <p className="text-center">{
                    signup ?
                        <>Already have an account?{' '}<Link href='/auth/signin' className="text-[#ffab6f] hover:text-app-sky">Sign In</Link></> : <>Don&#39;t have an account?{' '}<Link href='/auth/signup' className="text-[#ffab6f] hover:text-app-sky">Sign Up</Link></>}
                </p> */}

                <div className='flex justify-center items-center gap-4 pt-6 pb-4'>
                    <OAuthButton><BiLogoGoogle size={20} /></OAuthButton>
                    <OAuthButton><FaFacebookF size={20} /></OAuthButton>
                    <OAuthButton><AiFillApple size={20} /></OAuthButton>
                </div>

                <div className="py-4 flex items-center justify-center relative">
                    <p className="px-4 isolate
                    before:absolute before:h-[1px] before:bg-app-white-500 before:top-[calc(50%-1px)] before:right-[calc(50%+1rem)] before:left-6
                    after:absolute after:h-[1px] after:bg-app-white-500 after:top-[calc(50%-1px)] after:left-[calc(50%+1rem)] after:right-6">or</p>
                </div>

                <div className="text-center">
                    <button className="h-[2.25rem] w-[12rem] bg-gradient-to-tr from-app-sky to-app-orange rounded-lg">Connect Wallet</button>
                </div>
            </div>

            <div className="pt-16 md:pt-0 md:col-span-6 lg:col-span-5 lg:col-start-8">
                <div className='text-center'>
                    {/* <h2 className="gradient-text-reverse font-extrabold text-3xl mb-8">Sign {signup ? 'Up' : 'In'}<br /> To Get Started</h2> */}
                    <div className="h-72 w-full rounded-2xl overflow-hidden">
                        <Image src={FootballImg} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}