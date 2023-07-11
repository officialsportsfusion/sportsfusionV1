import { Freetips } from "@components/FreeTips";
import { AuthLayout } from "@components/AuthLayout";


export default function Page() {
  return (
    <main classname="min-h-screen text-app-white-500">
      <AuthLayout>
      <Freetips />
      </AuthLayout>
    </main>
  );
}
