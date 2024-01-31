import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionprovider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactQueryClientProvider } from "@/providers/reactqueryprovider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4-Fantasy League",
  description: "Created by Karthik",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <NextAuthSessionProvider session={session}>
            {children}
            <Toaster richColors position="top-center" />
          </NextAuthSessionProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
