export const Header = () => {
    return (
        <header className="w-full bg-[#0D001A] border-b border-zinc-900/60 select-none shrink-0 h-14 flex items-center">
            
            <div className="w-full max-w-md mx-auto px-4 flex items-center justify-between">
                
                <button className="p-1 -ml-1 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h1 className="text-[15px] font-bold text-white tracking-wide font-sans text-center">
                    Check & Track
                </h1>

                <button className="p-1 -mr-1 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </button>

            </div>
        </header>
    );
};