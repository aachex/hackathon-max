import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import { ROUTES } from "@/app/routing/routes";

export const Requirement = () => {
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState<'text' | 'file' | 'photo'>('text');
    const [textInput, setTextInput] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setTextInput(text);
        } catch (err) {
            console.error('Не удалось вставить из буфера', err);
        }
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedPhoto(e.target.files[0]);
        }
    };

    const isButtonDisabled = 
        (activeTab === 'text' && textInput.trim().length === 0) ||
        (activeTab === 'file' && !selectedFile) ||
        (activeTab === 'photo' && !selectedPhoto);

    return (
        <main className="flex-grow w-full bg-[#0D001A] text-white px-4 py-4 font-sans overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex flex-col justify-between">
            <div className="space-y-6">
                
                <div className="flex flex-col gap-1">
                    <button 
                        onClick={() => {
                            navigate(ROUTES.CHECKLIST);
                        }}
                        className="flex items-center gap-1 text-white text-xl font-bold tracking-tight -ml-1 cursor-pointer w-fit active:opacity-70"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Пришлите предписания
                    </button>
                    <p className="text-[11px] text-zinc-400 leading-normal pl-6">
                        Я найду нарушения и сроки, а вы проверите результат.
                    </p>
                </div>

                {/* Табы переключения формата */}
                <div className="grid grid-cols-3 bg-zinc-950 p-1 rounded-xl border border-zinc-900/60">
                    <button 
                        onClick={() => setActiveTab('text')}
                        className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'text' ? 'bg-[#4F25F9] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Текст
                    </button>
                    <button 
                        onClick={() => setActiveTab('file')}
                        className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'file' ? 'bg-[#4F25F9] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Файл
                    </button>
                    <button 
                        onClick={() => setActiveTab('photo')}
                        className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'photo' ? 'bg-[#4F25F9] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Фото
                    </button>
                </div>

                {/* Поле ввода текста предписания */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 flex flex-col h-48 justify-between relative">
                    {activeTab === 'text' && (
                        <>
                            <textarea 
                                placeholder="Вставьте текст предписания"
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                className="w-full h-32 bg-transparent text-sm text-white placeholder-zinc-600 resize-none focus:outline-none"
                            />
                            <div className="flex justify-between items-center text-[11px] pt-2 border-t border-zinc-900/60 font-mono">
                                <button 
                                    onClick={handlePaste}
                                    className="text-[#4F25F9] font-bold hover:underline cursor-pointer"
                                >
                                    Вставить из буфера
                                </button>
                                <span className="text-zinc-500">
                                    {textInput.length} символов
                                </span>
                            </div>
                        </>
                    )}

                    {activeTab === 'file' && (
                        <>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                accept=".pdf,.docx" 
                                className="hidden" 
                            />
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors"
                            >
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zinc-500 mb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <span className="text-xs text-zinc-400 text-center px-4">
                                    {selectedFile ? selectedFile.name : "Выберите файл PDF или DOCX"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] pt-2 border-t border-zinc-900/60 font-mono">
                                <span className="text-zinc-500">Макс. 50 МБ</span>
                                {selectedFile && (
                                    <button onClick={() => setSelectedFile(null)} className="text-red-500 hover:underline cursor-pointer">
                                        Удалить
                                    </button>
                                )}
                            </div>
                        </>
                    )}

                    {activeTab === 'photo' && (
                        <>
                            <input 
                                type="file" 
                                ref={photoInputRef} 
                                onChange={handlePhotoChange} 
                                accept="image/*" 
                                className="hidden" 
                            />
                            <div 
                                onClick={() => photoInputRef.current?.click()}
                                className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-colors"
                            >
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zinc-500 mb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                                <span className="text-xs text-zinc-400 text-center px-4">
                                    {selectedPhoto ? selectedPhoto.name : "Загрузите или сделайте снимок"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] pt-2 border-t border-zinc-900/60 font-mono">
                                <span className="text-zinc-500">Форматы: JPG, PNG</span>
                                {selectedPhoto && (
                                    <button onClick={() => setSelectedPhoto(null)} className="text-red-500 hover:underline cursor-pointer">
                                        Удалить
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Информационная плашка снизу */}
                <div className="bg-zinc-950/40 border border-zinc-900/40 rounded-xl p-3 flex gap-3 items-start">
                    <div className="text-zinc-500 mt-0.5 shrink-0">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.06l-.041.02a.75.75 0 01-1.063-1.06zm0 4.5l.041-.02a.75.75 0 111.063 1.06l-.041.02a.75.75 0 01-1.063-1.06zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[11px] text-zinc-400 leading-normal font-normal">
                            Присылайте весь текст, включая раздел со строками. Так я не пропущу дату.
                        </p>
                        <p className="text-[9px] text-zinc-600 font-mono">
                            Файлы PDF или DOCX, до 50МБ - Вкладка "Файл"
                        </p>
                    </div>
                </div>

            </div>

            {/* Фиксированные нижние элементы */}
            <div className="flex flex-col gap-3 pt-8">
                <div className="text-center text-[11px] text-zinc-500">
                    Вставьте текст чтобы продолжить
                </div>
                <button 
                    disabled={isButtonDisabled}
                    className={`w-full text-sm font-bold py-3 rounded-xl transition-all text-center ${
                        isButtonDisabled 
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50' 
                            : 'bg-[#4F25F9] text-white hover:opacity-90 active:scale-[0.995] cursor-pointer'
                    }`}
                >
                    Распознать
                </button>
            </div>

        </main>
    );
};