import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trin — HR Business Partner",
  description:
    "Andy Rachman Trinugraha. HR Business Partner with regional exposure across Indonesia, Singapore, Malaysia, and the Philippines.",
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