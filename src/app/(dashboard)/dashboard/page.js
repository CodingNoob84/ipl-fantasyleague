import Navbar from "@/layouts/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Dashboardpage() {
  const session = await getServerSession(authOptions);
  console.log("dashboard", session);
  return <div>Dashboard</div>;
}
