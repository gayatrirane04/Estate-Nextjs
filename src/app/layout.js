import "./globals.css";
import Header from "@components/Header";
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang='en'>
        <body
          className="antialiased"
        >
          <Header />
          {children}
        </body>
      </html>
      </ClerkProvider>
  );
}
