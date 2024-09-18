import Link from "next/link";
import React from "react";

export const Bottom = ({ text, login, signup }) => {
  return (
    <div className=" h-8 flex gap-2">
      {text}
      <Link href={"/login"} className="text-blue-500">
        {login}
      </Link>
      <Link href={"/signup"} className="text-blue-500">
        {signup}
      </Link>
    </div>
  );
};
