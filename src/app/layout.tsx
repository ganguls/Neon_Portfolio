import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GANGUL WEERASINGHE | Offensive Security Specialist",
  description:
    "Offensive Security Specialist with expertise in Red Teaming, Active Directory exploitation, and EDR evasion. Focused on securing complex enterprise environments through advanced technical research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md">
        {children}
      </body>
    </html>
  );
}
