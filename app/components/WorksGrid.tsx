'use client';

import { useState } from 'react';
import DiagonalStripe from './DiagonalStripe';

type Variant = 'ember' | 'sun' | 'sky' | 'paper';

type Work = {
    variant: Variant;
    enLabel: string;
    date: string;
    category: string;
    title: string;
    location: string;
};

const works: Work[] = [
    {
        variant: 'paper',
        enLabel: 'Kitchen Renovation',
        date: '2025.10',
        category: 'リフォーム',
        title: 'キッチンリフォーム',
        location: '寝屋川市・N棟',
    },
    {
        variant: 'sky',
        enLabel: 'Bath Renovation',
        date: '2025.09',
        category: 'リフォーム',
        title: 'お風呂リフォーム',
        location: '大阪市・1棟',
    },
    {
        variant: 'sun',
        enLabel: 'Drain Maintenance',
        date: '2025.09',
        category: 'メンテナンス',
        title: '排水管メンテナンス',
        location: '門真市・飲食店',
    },
    {
        variant: 'ember',
        enLabel: 'Bathroom Remodel',
        date: '2025.08',
        category: 'リフォーム',
        title: '洗面所一新',
        location: '寝屋川市・N邸',
    },
    {
        variant: 'paper',
        enLabel: 'Toilet Repair',
        date: '2025.04',
        category: '修理',
        title: 'トイレ修理',
        location: '吹田市・山田邸',
    },
    {
        variant: 'sky',
        enLabel: 'Water Heater Swap',
        date: '2025.07',
        category: '修理',
        title: '給湯器交換',
        location: '大阪市・1棟',
    },
    {
        variant: 'sun',
        enLabel: 'Drain Re-Routing',
        date: '2025.07',
        category: 'メンテナンス',
        title: 'キッチン排水',
        location: '寝屋川市・N邸',
    },
    {
        variant: 'ember',
        enLabel: 'Toilet Renovation',
        date: '2025.06',
        category: 'リフォーム',
        title: 'トイレ全面改装',
        location: '吹田市・富田邸',
    },
];

const filters = ['すべて', 'メンテナンス', '真心プランニング', 'リフォーム', '修理'];

function WorkCard({ variant, enLabel, date, category, title, location }: Work) {
    return (
        <div className="group cursor-pointer">
            <DiagonalStripe
                variant={variant}
                className="w-full aspect-square mb-3 transition-shadow duration-200 group-hover:shadow-lg"
                label={enLabel.toUpperCase()}
            />
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] tracking-widest text-ember uppercase">
                    {enLabel}
                </span>
                <span className="text-[10px] text-mute">{date}</span>
            </div>
            <div className="mb-1.5">
                <span className="text-[10px] border border-mute/40 text-mute px-2 py-0.5 rounded-full">
                    {category}
                </span>
            </div>
            <p className="text-[14px] font-medium text-ink mt-1">{title}</p>
            <p className="text-[12px] text-mute">{location}</p>
        </div>
    );
}

export default function WorksGrid() {
    const [active, setActive] = useState('すべて');
    const visible =
        active === 'すべて' ? works : works.filter((w) => w.category === active);

    return (
        <section className="bg-cream py-16 lg:py-20">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="flex flex-wrap gap-2 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-4 py-1.5 rounded-full text-[13px] transition-colors cursor-pointer ${
                                active === f
                                    ? 'bg-ink text-white'
                                    : 'border border-ink/20 text-ink-soft hover:border-ink/40'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {visible.map((w) => (
                        <WorkCard key={w.title} {...w} />
                    ))}
                </div>
            </div>
        </section>
    );
}
