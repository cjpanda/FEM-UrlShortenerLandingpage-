import "./globals.css";

export const metadata = {
  title: "Shortly URL Shortener",
  description: "Shortly URL Shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
