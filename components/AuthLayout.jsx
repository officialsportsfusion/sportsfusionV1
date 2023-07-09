import { AuthHeader } from "@components/AuthHeader";

export const AuthLayout = ({ children }) => {
    return (
        <main className="min-h-screen bg-[#00070d] text-app-white-500 flex flex-col">
            <AuthHeader />
            {children}
            <div className="app-container text-center pb-4 pt-8 mt-auto">
                <p>@SportsFusion</p>
            </div>
        </main>
    );
}