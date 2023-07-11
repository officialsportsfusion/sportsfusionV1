import { AuthLayout } from "@components/AuthLayout";
import { Input } from "@components/Input";
import FootballImg from '/images/football.png'
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from 'yup'
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const { email } = router.query
    setEmail(email)
  }, [router.query])

  const formik = useFormik({
    initialValues: { otp: '' },
    validationSchema: yup.object().shape({
      otp: yup.string().required().matches(/^\d{6,6}$/, 'Invalid OTP'),
    }),
    onSubmit: async ({ otp }, { }) => {
      console.log(otp)
    }
  })

  return (
    <>
      <Head>
        <title>Confirm OTP | SportsFusion</title>
      </Head>

      <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36 md:landscape:pt-24">
        <div className="md:col-span-6">
          <div className='pt-4'>
            <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">OTP Validation</span></h2>
            <p className='text-center mt-3'>Please enter OTP sent to {email || 'your'} email address</p>
          </div>

          <form className="py-6" onSubmit={formik.handleSubmit}>
            <div className='relative'>
              <Input placeholder='Enter OTP' type='text' name='otp' {...formik.getFieldProps('otp')} />
              {formik.touched.otp && formik.errors.otp && <p className='text-red-400 absolute bottom-2'>{formik.errors.otp}</p>}
            </div>
            <button className="app-border-gradient-rounded-lg w-full" type="submit"><span className="py-3 md:max-lg:py-2 hover:opacity-3/4">Validate Account</span></button>
          </form>

          <div className="py-4 flex items-center justify-center relative">
            <p className="px-4 isolate
                    before:absolute before:h-[1px] before:bg-app-white-500 before:top-[calc(50%-1px)] before:right-[calc(50%+1rem)] before:left-6
                    after:absolute after:h-[1px] after:bg-app-white-500 after:top-[calc(50%-1px)] after:left-[calc(50%+1rem)] after:right-6">or</p>
          </div>

          <div className="text-center pt-4">
            <button className="h-[2.25rem] w-[12rem] bg-gradient-to-tr from-app-sky to-app-orange rounded-lg">Resend OTP</button>
          </div>
        </div>

        <div className="pt-24 md:pt-0 md:col-span-6 lg:col-span-5 lg:col-start-8">
          <div className='text-center'>
            <div className="h-72 w-full rounded-2xl overflow-hidden">
              <Image src={FootballImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
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