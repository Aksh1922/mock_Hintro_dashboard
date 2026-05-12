import '@/styles/globals.css';

export const metadata = {
  title: "Hintro Dashboard",
  description: "Hintro Dashboard - Call Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
