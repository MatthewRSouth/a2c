'use client';

import { useState, useActionState } from 'react';
import { sendContact } from '../actions/sendContact';

const serviceOptions = ['メンテナンス', '真心プランニング', 'リフォーム', '修理', 'その他'];

const inputClass =
    'w-full bg-white border border-sand-deep rounded text-[14px] text-ink placeholder:text-mute/50 px-3 py-2.5 outline-none focus:border-ember transition-colors mt-1.5';

const labelClass = 'block text-[13px] font-medium text-ink-soft';

function FieldLabel({
    children,
    en,
    required,
}: {
    children: string;
    en: string;
    required?: boolean;
}) {
    return (
        <span className={labelClass}>
            {children}{' '}
            <span
                className="text-[9px] tracking-widest text-mute"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
                {en}
            </span>
            {required && <span className="text-ember ml-0.5">*</span>}
        </span>
    );
}

export default function ContactForm() {
    const [selectedService, setSelectedService] = useState('');
    const [state, formAction, isPending] = useActionState(sendContact, { status: 'idle' as const });

    if (state.status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-[20px] font-medium text-ink mb-3">
                    送信が完了しました
                </p>
                <p className="text-[14px] text-ink-soft max-w-[360px] leading-relaxed">
                    お問合せありがとうございます。
                    <br />
                    近日中に担当者よりご連絡いたします。
                </p>
            </div>
        );
    }

    return (
        <form action={formAction}>
            <h2
                className="text-[22px] font-medium text-ink mb-8"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
                無料お見積もりフォーム
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <label className="block">
                    <FieldLabel en="NAME" required>
                        お名前
                    </FieldLabel>
                    <input
                        name="name"
                        type="text"
                        placeholder="山田 太郎"
                        required
                        className={inputClass}
                    />
                </label>
                <label className="block">
                    <FieldLabel en="PHONE">お電話番号</FieldLabel>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="090-0000-0000"
                        className={inputClass}
                    />
                </label>
            </div>

            <div className="mb-6">
                <label className="block">
                    <FieldLabel en="EMAIL" required>
                        メールアドレス
                    </FieldLabel>
                    <input
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        required
                        className={inputClass}
                    />
                </label>
            </div>

            <div className="mb-6">
                <FieldLabel en="SERVICE">ご相談内容</FieldLabel>
                <input type="hidden" name="service" value={selectedService} />
                <div className="flex flex-wrap gap-2 mt-2">
                    {serviceOptions.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() =>
                                setSelectedService(selectedService === s ? '' : s)
                            }
                            className={`px-4 py-1.5 rounded-full text-[13px] border transition-colors ${
                                selectedService === s
                                    ? 'bg-ember border-ember text-white'
                                    : 'border-ink/20 text-ink-soft hover:border-ember'
                            }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <label className="block">
                    <FieldLabel en="MESSAGE" required>
                        お問合せ内容
                    </FieldLabel>
                    <textarea
                        name="message"
                        placeholder="水まわりのお困りごとや、ご相談したい内容をお書きください。"
                        required
                        rows={6}
                        className={`${inputClass} resize-none leading-relaxed`}
                    />
                </label>
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full bg-ember hover:bg-ember/85 disabled:opacity-60 text-white text-[14px] font-semibold py-4 rounded transition-colors"
                style={{ letterSpacing: '1px' }}
            >
                {isPending ? '送信中...' : '送信する →'}
            </button>

            {state.status === 'error' && (
                <p className="text-red-500 text-[13px] mt-4 text-center">
                    送信に失敗しました。もう一度お試しください。
                </p>
            )}
        </form>
    );
}
