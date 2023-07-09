import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }) => {
    return (
        <main className="min-h-screen bg-app-black text-app-white-500">
            <Header />
            {children}
            <Footer />
        </main>
    )
}
