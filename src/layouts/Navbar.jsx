import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full px-5 h-[90px] bg-slate-600 flex flex-row items-center justify-between">
      <div className="text-white font-bold">Logo</div>
      <div className="flex flex-row gap-5 text-white">
        <div className="flex flex-col">
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
        </div>
        <Avatar>
          <AvatarImage src={session?.user?.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="border rounded-full hover:text-rose-600 cursor-pointer p-2 flex justify-center items-center">
          <FaSignOutAlt className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
