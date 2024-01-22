import { Button } from "@/components/ui/button";
import SignedIn from "@/layouts/SignedInBtn";
import { authOptions } from "@/lib/auth";
import { DivideCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] h-[600px] flex items-center ">
        <div className="flex flex-col gap-10 p-10 border rounded-2xl shadow-2xl">
          <div>
            <Image src="/4fl-logo.png" alt="logo" width={300} height={50} />
          </div>
          <div>Please signin with your google account to continue.</div>
          <SignedIn />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
