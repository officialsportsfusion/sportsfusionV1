import { AuthForm } from "@components/AuthForm";
import { AuthLayout } from "@components/AuthLayout";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign In | SportsFusion</title>
      </Head>
      <AuthForm />
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