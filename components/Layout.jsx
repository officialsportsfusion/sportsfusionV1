import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = ({ children }) => {
    return (
        <main className="min-h-screen bg-app-black text-app-white-500 flex flex-col">
            <Header />
            {children}
            <Footer />
        </main>
    )
}
