import * as yup from 'yup';
import { useFormik } from 'formik'
import FootballImg from '/images/football-1406106.jpg'
import { AuthButton } from "@components/AuthButton";
import { AuthLayout } from "@components/AuthLayout";
import { OAuthButton } from "@components/OAuthButton";
import { PInput } from "@components/PInput";
import { Input } from "@components/Input";
import { countries } from "@lib/countries";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { BiLogoGoogle } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const { session } = useSession();

    const router = useRouter()

    const schema = yup.object().shape({
        username: yup.string().required("Username is required!").min(3, 'At least 3 characters'),
        country: yup.string().required("Required feild!"),
        workStatus: yup.string().required("Required feild!"),
        dob: yup.string().required("Required field!"),
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
        initialValues: { email: '', password: '', username: "", tel: '', country: '', workStatus: '', dob: '', countryCode: '' },
        validationSchema: schema,

        onSubmit: async (values) => {
            setIsLoading(true);

            try {
                const url = 'https://teal-worried-adder.cyclic.app/v1/user'
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: values?.email, password: values?.password, username: values?.username, tel: values?.tel, country: values?.country })
                })
                console.log(res)
                const data = await res.json();
                if (res.status === 200) {
                    router.push('/auth/signin')
                } else {
                    setError(data.message)
                    setTimeout(() => {
                        setError('');
                    }, 5000);
                }
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        }
    })

    const handleCountryChange = (selectedCountry) => {
        formik.setFieldValue('country', selectedCountry);

        // Assuming the country codes are stored in the `countryCode` field of the countries array
        // Find the selected country in the countries array and set the countryCode field accordingly
        const selectedCountryData = countries.find((country) => country.label === selectedCountry);
        if (selectedCountryData) {
            formik.setFieldValue('countryCode', Number(selectedCountryData.countryCode));
        }
    };

    const handleCountryCodeChange = (countryCode) => {
        const selectedCountryCode = countries.find((country) => country.countryCode.toString() === countryCode.toString());

        if (selectedCountryCode) {
            formik.setFieldValue('country', selectedCountryCode?.label);
        }
    };

    return (
        <>
            <Head>
                <title>Sign Up | SportsFusion</title>
            </Head>

            <section className="app-container md:grid md:grid-cols-12 md:gap-12 md:items-center md:portrait:max-lg:pt-36">
                <div className="md:col-span-6 ">
                    <div className='pt-4'>
                        <h2 className="text-center"><span className="text-3xl font-extrabold gradient-text w-fit">Sign Up</span></h2>
                        <p className='text-center mt-3'>Sign up to get started</p>
                    </div>

                    <form className="py-6" onSubmit={formik.handleSubmit}>
                        <Input placeholder='Enter Username' type='text' name='username' formik={formik} />
                        <Input placeholder='Enter Email' type='email' name='email' formik={formik} />

                        <div className='grid sm:grid-cols-12 sm:gap-4 md:grid-cols-1 md:gap-0 lg:grid-cols-12 lg:gap-4 items-center'>
                            <div className="relative py-1 sm:col-span-5">
                                <select
                                    id="country"
                                    name="country"
                                    onChange={(e) => handleCountryChange(e.target.value)}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.country}
                                    className='rounded-full w-full py-2 mb-7 px-6 outline-none text-[#00070d] '
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country.label} value={country.label}>
                                            {country.label}
                                        </option>
                                    ))}
                                </select>

                                {formik.touched.country && formik.errors.country && (
                                    <p className="text-red-400 absolute bottom-2">{formik.errors.country}</p>
                                )}
                            </div>

                            <div className='items-center flex bg-white rounded-full w-full py-2 h-[39p] mb-7 px-6 text-[#00070d] sm:col-span-7'>
                                +<input type='tel' name='countryCode' className='w-14 outline-none' onInput={e => handleCountryCodeChange(e.target.value)} {...formik.getFieldProps('countryCode')} />
                                <div className='opacity-50'>{" | "}</div>
                                <input placeholder='phone' type='tel' name='tel' className='pl-2 outline-none w-full' {...formik.getFieldProps('tel')} />
                            </div>
                        </div>

                        <PInput placeholder='Enter Password' name='password' formik={formik} />

                        {error && <p className="text-red-400">{error}</p>}

                        {session?.error && (<p className="text-red-400">{session.error}</p>)}

                        <AuthButton isLoading={isLoading} >Sign Up</AuthButton>
                    </form>

                    <p className="text-center">
                        Already have an account?{' '}<Link href='/auth/signin' className="text-[#ffab6f] hover:text-app-sky">Sign In</Link>
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
                        <h2 className="gradient-text-reverse font-extrabold text-3xl mb-8">Sign Up<br /> To Get Started</h2>
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