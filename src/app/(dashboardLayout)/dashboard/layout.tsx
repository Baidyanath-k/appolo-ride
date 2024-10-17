import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Rides-User Dashboard",
  description: "Next Level Rides Sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <h2>User Navbar</h2>
        {children}
      </div>
  );
}
