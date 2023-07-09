import { Header } from "@components/Header";
import { Otp } from "@components/Otp";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <Otp />
    </main>
  );
}
