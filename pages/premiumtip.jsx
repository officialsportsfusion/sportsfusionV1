import { Premiumtip } from "@components/Premiumtip";
import { AuthLayout } from "@components/AuthLayout";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <AuthLayout>
      <Premiumtip />
      </AuthLayout>
     
    </main>
  );
}
