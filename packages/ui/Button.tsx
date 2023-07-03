"use client";

import * as React from "react";

export const Button = () => {
  return <button className=" bg-blue-500 rounded px-4 py-2 text-white shadow-md hover:bg-amber-300" onClick={() => alert("boop")}>Boop</button>;
};
