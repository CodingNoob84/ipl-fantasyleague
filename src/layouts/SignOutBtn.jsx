"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

function SignOutBtn() {
  return (
    <div className="border rounded-full hover:text-rose-600 cursor-pointer p-2 flex justify-center items-center">
      <FaSignOutAlt onClick={() => signOut()} className="w-7 h-7" />
    </div>
  );
}

export default SignOutBtn;
