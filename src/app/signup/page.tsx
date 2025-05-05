"use client";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading signup...</div>}>
      <div>
        <h1>Signup Page</h1>
      </div>
    </Suspense>
  );
}
