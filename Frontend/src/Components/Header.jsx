import React from "react";
import { UserButton } from "@clerk/clerk-react";

export const Header = () => {
  return (
    <div className=" bg-[#1E2022] flex  px-5 py-2 justify-between w-full ">
      <h1 className=" font-sans font-extrabold text-3xl uppercase text-white ">
        Study Lab
      </h1>
      <div className=" ">
        <UserButton />
      </div>
    </div>
  );
};
