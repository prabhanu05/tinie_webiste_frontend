import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'tinie',
    description: 'One Stop for all your business needs',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={ibmPlexSans.className}>{children}</body>
        </html>
    );
}
