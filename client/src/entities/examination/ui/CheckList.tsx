import { useState } from 'react';
import { AddCheckList } from './AddCheckList';

export const CheckList = () => {
    const [checked, setChecked] = useState<{ [key: string]: boolean }>({
        "1.1": false, "1.2": false, "1.3": false,
        "2.1": false, "2.2": false, "2.3": false,
        "3.1": false, "3.2": false, "3.3": false
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));

    const totalCount = Object.keys(checked).length;
    const completedCount = Object.values(checked).filter(Boolean).length;

    return (
        <main className="flex-grow w-full bg-[#0D001A] text-white px-4 py-4 font-sans overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex flex-col justify-between relative">
            <div className="space-y-6">
                <h2 className="text-xl font-bold tracking-tight mb-1 flex items-center gap-1">
                    Чек-лист
                </h2>

                <div className="text-[11px] text-zinc-400 leading-tight space-y-0.5 font-mono pl-6">
                    <div>Тип проверки - Роспотребнадзор;</div>
                    <div>Тип заведения - Кафе; Площадь м² - 80м²;</div>
                    <div>Пунктов - {totalCount}.</div>
                </div>

                <div>
                    <h3 className="text-xl font-extrabold tracking-wide text-white mb-1">
                        Для плановой проверки:
                    </h3>
                    <p className="text-xs text-zinc-400 leading-normal">
                        Проверка может начаться без предупреждения. Пройдитесь по списку сегодня и отметьте, что уже в порядке.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="bg-[#4F25F9] text-white text-xs font-bold px-8 py-1.5 rounded-md tracking-wide shadow-[0_2px_10px_rgba(79,37,249,0.25)]">
                        Проверено {completedCount} из {totalCount}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3.5">
                        <h4 className="text-xs font-bold text-zinc-300 border-b border-zinc-900/60 pb-1 font-mono">1. Документы и журналы.</h4>
                        <div className="space-y-4">
                            {[
                                { id: "1.1", label: "1.1 Программа производственного контроля (ППК).", text: "(На основе ХАССП — утверждена руководителем, соответствует реальным процессам на кухне)." },
                                { id: "1.2", label: "1.2 Медицинские книжки.", text: "(Всех сотрудников, контактирующих с продуктами — действующие, с отметками о медосмотре, аттестации и прививках)." },
                                { id: "1.3", label: "1.3 Товаросопроводительные документы.", text: "(На сырье, накладные, декларации соответствия, ветеринарные сопроводительные через «Меркурий»)." }
                            ].map(item => (
                                <div key={item.id} onClick={() => toggle(item.id)} className="flex items-start gap-3 cursor-pointer">
                                    <div className={`w-[18px] h-[18px] mt-0.5 rounded border flex items-center justify-center shrink-0 ${checked[item.id] ? 'border-white' : 'border-zinc-600'}`}>
                                        {checked[item.id] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-xs font-bold text-zinc-100 leading-snug">{item.label}</div>
                                        <div className="text-[11px] text-zinc-400 leading-normal font-normal">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3.5">
                        <h4 className="text-xs font-bold text-zinc-300 border-b border-zinc-900/60 pb-1 font-mono">2. Помещения, планировка и оборудование.</h4>
                        <div className="space-y-4">
                            {[
                                { id: "2.1", label: "2.1Набор помещений.", text: "(Соответствует объему производства: склад, производственная зона, моечная, санузел, раздевалка для персонала)." },
                                { id: "2.2", label: "2.2 Внутренняя отделка.", text: "(Без повреждений, из материалов, допускающих ежедневную влажную уборку и дезинфекцию. Нет трещин, сколов, отслоений)." },
                                { id: "2.3", label: "2.3 Свободный доступ.", text: "(Ко всему оборудованию для санитарной обработки — нет загромождённых проходов)." }
                            ].map(item => (
                                <div key={item.id} onClick={() => toggle(item.id)} className="flex items-start gap-3 cursor-pointer">
                                    <div className={`w-[18px] h-[18px] mt-0.5 rounded border flex items-center justify-center shrink-0 ${checked[item.id] ? 'border-white' : 'border-zinc-600'}`}>
                                        {checked[item.id] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-xs font-bold text-zinc-100 leading-snug">{item.label}</div>
                                        <div className="text-[11px] text-zinc-400 leading-normal font-normal">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3.5">
                        <h4 className="text-xs font-bold text-zinc-300 border-b border-zinc-900/60 pb-1 font-mono">3. Внешняя проверка.</h4>
                        <div className="space-y-4">
                            {[
                                { id: "3.1", label: "3.1 Вывеска на фасаде.", text: "(Фирменное наименование организации, адрес (место нахождения), тип заведения («кафе»), режим работы. Вся информация на русском языке." },
                                { id: "3.2", label: "3.2 Режим работы .", text: "(Чётко указан, совпадает с фактическим)." },
                                { id: "3.3", label: "3.3 Знак «Курение запрещено» на двери.", text: "(Установленной формы: круг с красной каймой шириной не менее 13,7 мм, диаметр круга не менее 200 мм, в центре — графическое изображение сигареты. На каждой входной двери)." }
                            ].map(item => (
                                <div key={item.id} onClick={() => toggle(item.id)} className="flex items-start gap-3 cursor-pointer">
                                    <div className={`w-[18px] h-[18px] mt-0.5 rounded border flex items-center justify-center shrink-0 ${checked[item.id] ? 'border-white' : 'border-zinc-600'}`}>
                                        {checked[item.id] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-xs font-bold text-zinc-100 leading-snug">{item.label}</div>
                                        <div className="text-[11px] text-zinc-400 leading-normal font-normal">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 pt-8">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#4F25F9] text-white text-sm font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.995] transition-all cursor-pointer text-center"
                >
                    Превратить в задачи
                </button>
                <button className="w-full bg-white text-[#4F25F9] text-sm font-bold py-3 rounded-xl hover:bg-zinc-100 active:scale-[0.995] transition-all cursor-pointer text-center">
                    Поделиться списком
                </button>
            </div>

            <AddCheckList isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
};