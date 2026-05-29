'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { status: 'idle' | 'success' | 'error' };

function esc(s: string) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function sendContact(_prev: State, formData: FormData): Promise<State> {
    const name = (formData.get('name') as string).trim();
    const phone = (formData.get('phone') as string).trim();
    const email = (formData.get('email') as string).trim();
    const service = (formData.get('service') as string).trim();
    const message = (formData.get('message') as string).trim();

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'matthewrogersouth@gmail.com',
            subject: `【A2C Pipemaster】お問合せ: ${esc(name)}様`,
            html: `
                <h2>新しいお問合せが届きました</h2>
                <table cellpadding="6">
                    <tr><td><strong>お名前</strong></td><td>${esc(name)}</td></tr>
                    <tr><td><strong>お電話番号</strong></td><td>${esc(phone) || '—'}</td></tr>
                    <tr><td><strong>メール</strong></td><td>${esc(email)}</td></tr>
                    <tr><td><strong>ご相談内容</strong></td><td>${esc(service) || '—'}</td></tr>
                </table>
                <h3>お問合せ内容</h3>
                <p style="white-space:pre-wrap">${esc(message)}</p>
            `,
        });
        return { status: 'success' };
    } catch {
        return { status: 'error' };
    }
}
