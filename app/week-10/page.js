"use client";

import Link from "next/link";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-5">
      {!user ? (
        <>
          <button onClick={gitHubSignIn}>Sign in to view options</button>
        </>
      ) : (
        <>
          <Link className="block mb-10" href="/week-9/shopping-list">
            Go to shopping list
          </Link>
          <button onClick={firebaseSignOut}>Sign Out</button>
        </>
      )}
    </main>
  );
}
