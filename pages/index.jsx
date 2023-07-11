
import { Header } from "@components/Header";
import { AuthForm } from "@components/AuthForm";
import { AuthLayout } from "@components/AuthLayout";


export default function Page() {
  return (
    <div className="min-h-screen bg-app-black text-app-white-500">
      <AuthLayout>
      <AuthForm />
    </AuthLayout>
    </div>
  );
}
