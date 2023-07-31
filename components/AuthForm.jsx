import * as yup from 'yup'
import { useFormik } from 'formik'
import Link from "next/link"
import Image from "next/image";
import FootballImg from '../images/football-1406106.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiFillApple } from 'react-icons/ai'
import { Input } from "./Input";
import { AuthButton } from "./AuthButton";
import { OAuthButton } from "./OAuthButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Countries } from './countries';


export const AuthForm = ({ signup }) => {
    const [countries, setCountries] = useState(Countries);
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [error, setError] = useState('')
    const router = useRouter()
    const { session } = useSession();
    const schema = yup.object().shape({
        username: !!signup && yup.string().required("Username is required!").min(3, 'At least 3 characters'),
        email: yup.string().email().required(),
        password: yup.string().trim().required()
        // .matches(/(?=.*[A-Z])/, 'must contain uppercase')
        // .matches(/^(?=.*[a-z])/, 'Must contain lowercase')
        // .matches(/(?=.*\d)/, 'must contain a digit')
        // .matches(/(?=.*[^\w\d\s])/, 'must contain special character')
        // .min(8, 'must be at least 8 characters long')
        // .max(50, 'must be at most 50 characters long')
    })


    const formik = useFormik({
        initialValues: { email: '', password: '', username: "", tel:'', country:'' },
        validationSchema: schema,
        onSubmit: async (values, { }) => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false); // Set the loading state back to false after the loading process completes
              }, 2000); 
            if (!!signup) {
                // return console.log('sign up')
                try{
                const url = 'https://teal-worried-adder.cyclic.app/v1/user'
                const res = await fetch(url, {
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json"
                        },
                    body:JSON.stringify( {email:values?.email, password:values?.password, username:values?.username, tel:values?.tel, country:values?.country })
                })
                console.log(res)
                const data = await res.json();                
                if(res.status === 200){
                    router.push('/auth/signin')
                }else{
                    setError(data.message)
                    setTimeout(() => {
                        setError('');
                      }, 5000);
                }


                }catch(err){
                    console.log(err)
                }
            } else {
                try {
                    const res = await signIn('credentials', { email: values?.email, password: values?.password, redirect: false })
                    if (res.error) {
                        // Handle the error and display the message to the user
                        setErrorMessage(res.error.message);
                        // Display the error message on the frontend UI (e.g., in a toast or a notification)
                      }
                    if (res.ok) {
                        // const data = await res.json();
                        // console.log(data); // Log the returned object
                        router.push('/');
                      } else {
                        console.error('Authentication failed:', res.status);
                      }
                  
                } catch (error) {
                    console.error(error)
                }
            }
        }
    })

    const handleCountryChange = (selectedCountry) => {
        formik.setFieldValue('country', selectedCountry);
        
        // Assuming the country codes are stored in the `countryCode` field of the countries array
        // Find the selected country in the countries array and set the countryCode field accordingly
        const selectedCountryData = countries.find((country) => country.label === selectedCountry);
        if (selectedCountryData) {
          formik.setFieldValue('tel', selectedCountryData.countryCode);
        }
      };
      

    return (
        <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36">
            <div className="md:col-span-6">
                <div className='pt-4'>
                    <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">Sign In</span></h2>
                    {/* <p className='text-center mt-3'>Sign {signup ? 'up' : 'in'} to get started</p> */}
                </div>

                <div className="py-6">
                    <Input placeholder='Enter Email' type='email' />
                    <Input placeholder='Enter Password' type='password' />
                    {
                        !!!signup &&
                        <div className="text-right mb-4">
                            <Link href='/auth/reset-password' className="hover:text-app-sky">Forgotten Password?</Link>
                        </div>
                    }
                    <AuthButton>Sign {signup ? 'Up' : 'In'}</AuthButton>
                </div>

                <p className="text-center">{
                    signup ?
                        <>Already have an account?{' '}<Link href='/auth/signin' className="text-[#ffab6f] hover:text-app-sky">Sign In</Link></> : <>Don&#39;t have an account?{' '}<Link href='/auth/signup' className="text-[#ffab6f] hover:text-app-sky">Sign Up</Link></>}
                </p> 

                <div className='flex justify-center items-center gap-4 pt-6 pb-4'>
                    <OAuthButton onClick={() => signIn('google')}><BiLogoGoogle size={20} /></OAuthButton>
                    <OAuthButton onClick={() => signIn('facebook')}><FaFacebookF size={20} /></OAuthButton>
                    <OAuthButton onClick={() => signIn('apple')}><AiFillApple size={20} /></OAuthButton>
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
                    <h2 className="gradient-text-reverse font-extrabold text-3xl mb-8">Sign {signup ? 'Up' : 'In'}<br /> To Get Started</h2>
                    <div className="h-72 w-full rounded-2xl overflow-hidden">
                        <Image src={FootballImg} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}