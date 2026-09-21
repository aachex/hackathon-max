import React from 'react';
import { IconButton } from '@maxhub/max-ui'; 

export const Header: React.FC = () => {

    const handleCloseMiniApp = () => {
        if (window.MAXWebAPP) {
        window.MAXWebAPP.close();
        } else {
        console.log('MAXWebAPP.close() вызван вне мессенджера');
        }
    };

    const handleMinimizeMiniApp = () => {
        if (window.MAXWebAPP) {
        window.MAXWebAPP.toggleExpand(); 
        } else {
        console.log('MAXWebAPP.toggleExpand() вызван вне мессенджера');
        }
    };

    const handleInfoMenu = () => {
        console.log('Инфо-меню');
    };

    return (
        <header className="w-full px-4 py-3 sticky top-0 z-50 bg-[#121212] border-b border-zinc-900 select-none">
            <div className="max-w-md mx-auto flex items-center justify-between">
                
                <div className="w-12 flex justify-start">
                <IconButton 
                    onClick={handleCloseMiniApp} 
                    variant="ghost"
                    aria-label="Закрыть полностью"
                    className="hover:bg-zinc-800/50 active:bg-zinc-900"
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </IconButton>
                </div>

                <div className="flex-grow text-center">
                <h1 className="text-sm font-black text-white tracking-widest uppercase font-mono">
                    Check <span className="text-amber-400">&</span> Track
                </h1>
                </div>

                <div className="w-20 flex justify-end items-center gap-1">
                
                <IconButton 
                    onClick={handleMinimizeMiniApp} 
                    variant="ghost"
                    aria-label="Свернуть"
                    className="hover:bg-zinc-800/50 active:bg-zinc-900"
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </IconButton>

                <IconButton 
                    onClick={handleInfoMenu} 
                    variant="ghost"
                    aria-label="Подробнее"
                    className="hover:bg-zinc-800/50 active:bg-zinc-900"
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </IconButton>

                </div>
            </div>
        </header>
    );
};