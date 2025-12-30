// src/app/layout.jsx
import "./globals.css"; // your global styles

export const metadata = {
  title: "My App",
  description: "Next.js 14 Layout Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

