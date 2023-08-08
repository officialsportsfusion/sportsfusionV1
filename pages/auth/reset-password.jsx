import { AuthButton } from "@components/AuthButton";
import { AuthLayout } from "@components/AuthLayout";
import { Input } from "@components/Input";
import FootballImg from '/images/football.png'
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from 'yup'
import Head from "next/head";
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: yup.object().shape({
            email: yup.string().email().required(),
        }),
        onSubmit: async ({ email }, { }) => {
            // send request and redirect to confirm otp page
            router.push(encodeURI(`/auth/confirm-otp?email=${email}`))
        }
    })

    return (
        <>
            <Head>
                <title>Reset Password | SportsFusion</title>
            </Head>
            <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36 md:landscape:pt-24">
                <div className="md:col-span-6">
                    <div className='pt-4'>
                        <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">Password Reset</span></h2>
                        <p className='text-center mt-3'>Password reset link will be sent to your email address</p>
                    </div>

                    <form className="py-6" onSubmit={formik.handleSubmit}>
                        <div className='relative'>
                            <Input placeholder='Enter Email' type='email' name='email' formik={formik} />
                            {formik.touched.email && formik.errors.email && <p className='text-red-400 absolute bottom-2'>{formik.errors.email}</p>}
                        </div>
                        <AuthButton>Enter</AuthButton>
                    </form>

                    <p className="text-center">
                        Know your password?{' '}<Link href='/auth/signin' className="text-[#ffab6f] hover:text-app-sky">Sign In</Link>
                        {/* jhjhbh */}
                    </p>
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