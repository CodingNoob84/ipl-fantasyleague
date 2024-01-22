import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import SignOutBtn from "./SignOutBtn";
import { redirect } from "next/navigation";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="w-full px-5 h-[90px] bg-slate-600 flex flex-row items-center justify-between">
      <div className="text-white font-bold">
        <Image src="/4fl-logo.png" alt="logo" width={300} height={50} />
      </div>
      <div className="flex flex-row gap-5 text-white">
        <div className="flex flex-col">
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
        </div>
        <Avatar>
          <AvatarImage src={session?.user?.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SignOutBtn />
      </div>
    </div>
  );
}

export default Navbar;
