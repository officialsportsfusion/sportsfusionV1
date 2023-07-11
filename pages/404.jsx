import { Footer } from "@components/Footer"
import Logo from '/images/logo1.png'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const Page = () => {
    return (
        <section className="app-container">
            <h2 className="text-2xl">404 - Error!</h2>
            <p className="mt-6">page not found. Go to <Link href='/' className="text-app-orange hover:text-app-sky">Home</Link></p>
        </section>
    )
}
export default Page

Page.getLayout = (page) => {
    return (
        <main className="min-h-screen bg-app-black text-app-white-500 flex flex-col">
            <Head>
                <title>404 - not found | SportsFusion</title>
            </Head>
            <header className="pb-6">
                <nav className='py-4 app-container md:py-6'>
                    <Link href='/'>
                        <Image src={Logo} alt='Logo' className='w-[8rem] sm:w-40 md:w-44 lg:w-52' />
                    </Link>
                </nav>
            </header>
            {page}
            <Footer />
        </main>
    )
}