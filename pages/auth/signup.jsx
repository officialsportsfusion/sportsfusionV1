import { AuthForm } from "@components/AuthForm";
import { AuthLayout } from "@components/AuthLayout";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <title>Sign Up | SportsFusion</title>
            </Head>
            <AuthForm signup />
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