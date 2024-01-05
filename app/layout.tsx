import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Account Center",
  description: "Account Center by F-code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
