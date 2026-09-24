import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import { ROUTES } from "@/app/routing/routes";

export const AddCheckList = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const navigate = useNavigate()

    const [date, setDate] = useState('');

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        
        let formatted = '';
        if (input.length > 0) {
            formatted += input.substring(0, 2);
        }
        if (input.length > 2) {
            formatted += '.' + input.substring(2, 4);
        }
        if (input.length > 4) {
            formatted += '.' + input.substring(4, 8);
        }

        setDate(formatted);
    };

    const isButtonDisabled = date.length < 10;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose} 
                        className="absolute inset-0 bg-black/60 z-40"
                    />

                    <motion.div 
                        initial={{ translateY: "100%" }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute bottom-0 left-0 right-0 bg-[#0D001A] border-t border-zinc-800 rounded-t-3xl p-6 z-50"
                    >
                        <div className="w-full flex flex-col font-sans">
                            <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                                Когда ждёте проверку?
                            </h3>
                            <p className="text-xs text-zinc-400 leading-normal mb-5">
                                Добавлю пункты чек-листа в ваши задачи и напомню о них до этой даты.
                            </p>

                            <div className="flex flex-col gap-1.5 mb-4">
                                <label className="text-xs font-bold text-zinc-300 font-mono">Дата проверки</label>
                                <div className="relative w-full">
                                    <input 
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={10}
                                        placeholder="ДД.ММ.ГГГГ"
                                        value={date}
                                        onChange={handleDateChange}
                                        className="w-full bg-transparent border border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#4F25F9] font-mono"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => {
                                    onClose();
                                    navigate(ROUTES.REQUIREMENT);
                                }}
                                className="text-left text-xs font-semibold text-zinc-400 hover:text-white transition-colors mb-6 cursor-pointer inline-block w-fit"
                            >
                                Не знаю точную дату
                            </button>

                            <div className="flex flex-col gap-2">
                                <button 
                                    disabled={isButtonDisabled}
                                    onClick={() => {
                                        onClose();
                                        navigate(ROUTES.REQUIREMENT);
                                    }}
                                    className={`w-full text-sm font-bold py-3 rounded-xl transition-all text-center ${
                                        isButtonDisabled 
                                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50' 
                                            : 'bg-[#4F25F9] text-white hover:opacity-90 active:scale-[0.995] cursor-pointer'
                                    }`}
                                >
                                    Добавить задачи
                                </button>
                                <button 
                                    onClick={onClose}
                                    className="w-full bg-white text-[#4F25F9] text-sm font-bold py-3 rounded-xl hover:bg-zinc-100 active:scale-[0.995] transition-all cursor-pointer text-center"
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};