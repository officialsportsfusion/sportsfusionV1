import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Profile } from "@components/ProfilePage";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <Profile />
      <Footer />
    </main>
  );
}
