// app/layout.tsx
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'No Ruff Days',
  description: 'Helping Dawgs stay focused—one task at a time!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
