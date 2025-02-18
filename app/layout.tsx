import "./ui/globals.css";
import { roboto } from '@/frontend-estoca-ai/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
