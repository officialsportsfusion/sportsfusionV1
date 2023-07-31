import { Addfreetips } from "@components/Addfreetips";
import { Addpremiumtip } from "@components/Addpremiumtip";
import { AuthLayout } from "@components/AuthLayout";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
    <AuthLayout>
    <Addfreetips />
    </AuthLayout>
    </main>
  );
}
