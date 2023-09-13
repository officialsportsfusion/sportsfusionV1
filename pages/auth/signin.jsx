import * as yup from 'yup'
import { useFormik } from 'formik'
import Link from "next/link"
import Image from "next/image";
import FootballImg from '/images/football-1406106.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiFillApple } from 'react-icons/ai'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import { useState } from 'react';

import { AuthLayout } from "@components/AuthLayout";
import Head from "next/head";
import { Input } from '@components/Input';
import { OAuthButton } from '@components/OAuthButton';
import { PInput } from '@components/PInput';
import { AuthButton } from '@components/AuthButton';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().trim().required()
  })

  const onChange = () => {
    if (error) setError('')
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: schema,

    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        const res = await signIn('credentials', { email: values?.email, password: values?.password, redirect: false })
        if (res.error) {
          // Handle the error and display the message to the user
          // setError(res?.error);
          setError("Invalid Email or password!");
          // Display the error message on the frontend UI (e.g., in a toast or a notification)
        }
        if (res.ok) {
          // const data = await res.json();
          router.push('/');
        } else {
          console.error('Authentication failed:', res.status);
        }

      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }
  })

  return (
    <>
      <Head>
        <title>Sign In | SportsFusion</title>
      </Head>

      <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36">
        <div className="md:col-span-6">

          <div className='pt-4'>
            <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">Sign In</span></h2>
            <p className='text-center mt-3'>Sign in to get started</p>
          </div>

          <form className="py-6" onSubmit={formik.handleSubmit} onChange={onChange}>
            <Input placeholder='Enter Email' type='email' name='email' formik={formik} />
            <PInput name='password' placeholder='password' formik={formik} />

            <div className="text-right mb-4">
              <Link href='/auth/reset-password' className="hover:text-app-sky">Forgotten Password?</Link>
            </div>

            {error && (<p className="text-red-400">{error}</p>)}

            <AuthButton isLoading={isLoading} >Sign In</AuthButton>
          </form>

          <p className="text-center">Don&#39;t have an account?{' '}<Link href='/auth/signup' className="text-[#ffab6f] hover:text-app-sky">Sign Up</Link>
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

        <div className='pt-16 md:pt-0 md:col-span-6 lg:col-span-5 lg:col-start-8'>
          <div className='text-center hidden md:contents'>
            <h2 className="gradient-text-reverse font-extrabold text-3xl mb-8">Sign In<br /> To Get Started</h2>
            <div className="h-72 w-full rounded-2xl overflow-hidden">
              <Image src={FootballImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

Page.getLayout = (page) => {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
