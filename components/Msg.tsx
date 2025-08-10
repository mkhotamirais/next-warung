import clsx from "clsx";
import React from "react";

interface MsgProps {
  msg: string;
  error?: boolean;
}

export default function Msg({ msg, error = false }: MsgProps) {
  return (
    <div
      className={clsx(
        "text-green-500 py-2 px-3 bg-green-100 rounded mb-2 text-sm",
        error ? "text-red-500 bg-red-50" : "text-green-500 bg-green-50"
      )}
    >
      {msg}
    </div>
  );
}
