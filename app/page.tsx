"use client"

import { useSession } from "@/utils/auth-client";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Our App</h1>
          <p className="text-lg text-gray-600">Please register or log in to continue.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome back, {session.user.name}!</h1>
      <p className="text-lg text-gray-600">You are logged in as {session.user.email}.</p>
      <p>Your role is: {session.user.role}</p>
    </div>
  );
}
