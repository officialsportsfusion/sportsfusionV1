import { Header } from "@components/Header";
import Reset from "@components/Reset";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <Reset />
    </main>
  );
}
