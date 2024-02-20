import Image from "next/image";

export const DashboardCard = () => {
  return (
    <div className="flex gap-[24px] mt-20">
      <div className="w-fill h-fill border border-black rounded-lg ">
        <Image
          alt=""
          className=" object-scale-down rounded-lg "
          src={"/land.jpeg"}
          width={384}
          height={216}
        />
      </div>
      <div className="w-[384px] h-[256px] border border-black rounded-lg bg-white flex flex-col">
        <div className="flex w-[384px] h-[56px] border border-black items-center  ">
          <Image
            alt=""
            className="object-scale-down"
            src={"/green.png "}
            width={20}
            height={20}
          />
          <h1>Your Income</h1>
        </div>
        <div className="w-[186px] h-[72px] gap-[4px] flex flex-col items-center ">
          <strong>1,200,000₮</strong>
          <p>Your Income Amount</p>
        </div>
      </div>
      <div className="w-[384px] h-[256px] border border-black rounded-lg bg-white"></div>
    </div>
  );
};
