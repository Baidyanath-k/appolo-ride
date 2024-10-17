import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Rides-Driver Dashboard",
  description: "Next Level Rides Sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <h2>Driver Navbar</h2>
        {children}
      </div>
  );
}
