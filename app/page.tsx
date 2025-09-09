"use client"

import { authClient, useSession } from "@/utils/auth-client";
import { useEffect, useState } from "react";

export default function Home() {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await authClient.listAccounts();
      setInfo(JSON.stringify(accounts, null, 2));
    };

    fetchAccounts();
  }, []);
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
      <pre className="bg-gray-100 p-4 rounded mt-6 overflow-auto text-sm">
        Session: {JSON.stringify(session, null, 2)}
      </pre>

      <pre className="bg-gray-100 p-4 rounded mt-6 overflow-auto text-sm">
        {info || "Loading account info..."}
      </pre>
    </div>
  );
}
