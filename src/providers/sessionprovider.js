"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

function NextAuthSessionProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default NextAuthSessionProvider;
