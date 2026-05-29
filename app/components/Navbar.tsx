'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { href: '/', label: 'Home', sub: 'HOME' },
    { href: '/about', label: '私たちについて', sub: 'ABOUT' },
    { href: '/services', label: 'サービス', sub: 'SERVICES' },
    { href: '/works', label: '施工事例', sub: 'WORKS' },
    { href: '/contact', label: 'お問合せ', sub: 'CONTACT' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-paper border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-3 shrink-0"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-9 h-9 rounded-full shrink-0"
                        style={{
                            background: 'linear-gradient(135deg, #FFD27A 0%, #EF7C4A 100%)',
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

                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map(({ href, label, sub }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className="flex flex-col items-center transition-colors hover:text-ink text-ink"
                            >
                                <span
                                    className={`text-[13px] leading-none ${
                                        isActive ? 'border-b border-ember pb-px' : ''
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
                    className="hidden lg:flex items-center gap-2 bg-ember text-white text-[13px] font-medium px-4 py-2 rounded transition-colors hover:bg-ember/85 tracking-wide shrink-0"
                >
                    <Phone size={13} />
                    090-5153-4046
                </a>

                <button
                    className="lg:hidden text-ink p-1 ml-auto"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-paper border-t border-ink/10 px-6 py-5 flex flex-col gap-1">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-[15px] py-3 border-b border-ink/8 text-ink ${
                                pathname === href ? 'font-semibold text-ember' : ''
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <a
                        href="tel:090-5153-4046"
                        className="flex items-center gap-2 bg-ember text-white text-[14px] font-medium px-4 py-3 rounded mt-4"
                        onClick={() => setOpen(false)}
                    >
                        <Phone size={14} />
                        090-5153-4046
                    </a>
                </div>
            )}
        </header>
    );
}
