import Image from "next/image";
import { ThemeContext } from "./MainProvider";
import { useContext, useState } from "react";

export const DashHeader = () => {
  //   const { theme, setTheme } = useContext(ThemeContext);
  //   const handler = () => {
  //     setTheme("red");
  //   };

  return (
    <div
      //   style={{ backgroundColor: theme }}
      className="w-screen h-[72px] border border-black flex items-center justify-around bg-white "
    >
      <div className="w-[225.4px] h-[40px] gap-[24px] flex items-center">
        <Image
          alt=""
          className=" object-scale-down  w-[60px] h-[60px] "
          src={"/Vector.png"}
          width={60}
          height={60}
        />
        <strong className="text-[16px] leading-6 ">Dashboard</strong>
        <p>Records</p>
      </div>
      <div className="w-[163px] h-[40px] gap-[24px]">
        <button></button>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      {/* <button onClick={handler}>Theme</button> */}
    </div>
  );
};
