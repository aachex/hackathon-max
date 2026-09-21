import { Outlet } from "react-router";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-gray-100 antialiased font-mono">
      
            <Header />

            <main className="flex-grow w-full max-w-md mx-auto bg-[#121212] px-4 py-8 md:my-4 md:border-2 md:border-zinc-800 md:rounded-3xl">
                <div className="h-full flex flex-col">   
                <Outlet />
                </div>
            </main>

            <Footer />
        
        </div>
    );
};