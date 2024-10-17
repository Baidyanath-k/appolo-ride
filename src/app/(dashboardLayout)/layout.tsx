import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Rides",
  description: "Next Level Rides Sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>common Dashboard Navbar</h2>
      {children}
    </>
  );
}
