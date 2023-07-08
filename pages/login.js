import { Header } from "@components/Header";
import SigninPage from "@components/SignIn";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <SigninPage />
    </main>
  );
}
