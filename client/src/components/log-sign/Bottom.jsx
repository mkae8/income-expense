import Link from "next/link";
import React from "react";

export const Bottom = ({ text, goto }) => {
  return (
    <div className="w-[220px] h-8 flex gap-2">
      {text}
      <Link href={"/login"} className="text-blue-500">
        {goto}
      </Link>
    </div>
  );
};
