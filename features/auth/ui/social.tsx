"use client";

import { Button } from "@/shared/ui";
import { signIn } from "next-auth/react";
import { FaGoogle, FaYandex } from "react-icons/fa";

export function Social() {
  return (
    <div className="mb-2 grid grid-cols-2 gap-6 space-y-4">
      <Button
        onClick={() => signIn("google", { callbackUrl: "/settings" })}
        variant={"outline"}
        className="cursor-pointer"
      >
        <FaGoogle className="mr-2 size-4" />
        Google
      </Button>
      <Button
        onClick={() => signIn("yandex", { callbackUrl: "/settings" })}
        variant={"outline"}
        className="cursor-pointer"
      >
        <FaYandex className="mr-2 size-4" />
        Яндекс
      </Button>
    </div>
  );
}
