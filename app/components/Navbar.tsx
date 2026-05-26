'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home', sub: 'HOME' },
    { href: '/about', label: '私たちについて', sub: 'ABOUT' },
    { href: '/services', label: 'サービス', sub: 'SERVICES' },
    { href: '/works', label: 'WORKS', sub: '施工' },
    { href: '/contact', label: 'お問合せ', sub: 'CONTACT' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-paper border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <div
                        className="w-9 h-9 rounded-full shrink-0"
                        style={{
                            background:
                                'linear-gradient(135deg, #FFD27A 0%, #EF7C4A 100%)',
                        }}
                    />
                    <div className="leading-tight">
                        <span className="block text-sm font-bold text-ink tracking-tight">
                            A2C Pipemaster
                        </span>
                        <span className="block text-[10px] text-ink tracking-wider">
                            水の専門家 · SINCE 2019
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(({ href, label, sub }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex flex-col items-center transition-colors hover:text-ink ${
                                    isActive ? 'text-ink' : 'text-ink'
                                }`}
                            >
                                <span
                                    className={`text-[13px] leading-none ${
                                        isActive
                                            ? 'border-b border-ember pb-px'
                                            : ''
                                    }`}
                                >
                                    {label}
                                </span>
                                <span className="text-[9px] tracking-widest text-ink mt-0.5">
                                    {sub}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <a
                    href="tel:090-5153-4046"
                    className="hidden md:flex items-center gap-2 bg-ember text-white text-[13px] font-medium px-4 py-2 rounded transition-colors hover:bg-ember/85 tracking-wide shrink-0"
                >
                    <Phone size={13} />
                    090-5153-4046
                </a>
            </div>
        </header>
    );
}
