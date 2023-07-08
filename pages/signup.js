import { Header } from "@components/Header";
import { SignupPage } from "@components/SignupPage";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <SignupPage />
    </main>
  );
}
