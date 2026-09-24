import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full px-4 sm:px-6 py-5 border-t border-zinc-900 bg-[#0D001A] mt-auto">
            <div className="max-w-md mx-auto text-center font-mono">

                <p className="text-[9px] text-amber-500/60 leading-relaxed uppercase tracking-widest mb-1.5 font-bold">
                    // Правовая информация
                </p>
                
                <p className="text-[10px] text-zinc-500 leading-normal max-w-[95%] mx-auto font-sans">
                    Приложение не является юридическим сервисом. Все формулировки, критерии и чек-листы носят исключительно ознакомительный и рекомендательный характер.
                </p>
                
            </div>
        </footer>
    );
};