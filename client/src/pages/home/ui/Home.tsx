export const Home = () => {
    
    const handleAction = (actionName: string) => {
        alert(`Вы нажали: "${actionName}". Эта страница будет добавлена на следующем этапе MVP!`);
    };

    return (
        <div className="w-full flex flex-col justify-center py-4 select-none tracking-tight">
            <h2 className="text-3xl font-black text-white text-left mb-10 px-2 tracking-tighter">
                Что нужно <br />
                <span className="text-amber-400">сделать?</span>
            </h2>

            <div className="flex flex-col gap-4 w-full px-2">
                
                <button
                onClick={() => handleAction('Подготовиться к проверке')}
                className="w-full py-4.5 px-6 text-base font-bold text-black bg-amber-400 border border-amber-400 rounded-lg cursor-pointer hover:bg-amber-300 hover:border-amber-300 active:bg-amber-500 active:border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-[0.995] transition-all duration-200 ease-in-out text-center"
                >
                Подготовиться к проверке
                </button>

                <button
                onClick={() => handleAction('Загрузить предписание')}
                className="w-full py-4.5 px-6 text-base font-semibold text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:border-zinc-700 active:bg-zinc-950 active:border-zinc-900 active:scale-[0.995] transition-all duration-200 ease-in-out text-center"
                >
                Загрузить предписание
                </button>

                <button
                onClick={() => handleAction('Мои задачи')}
                className="w-full py-4.5 px-6 text-base font-semibold text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:border-zinc-700 active:bg-zinc-950 active:border-zinc-900 active:scale-[0.995] transition-all duration-200 ease-in-out text-center"
                >
                Мои задачи
                </button>

            </div>
        </div>
    );
}