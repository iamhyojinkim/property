import "./globals.css";

export const metadata = {
  title: "zillow ",
  description: "a demo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
