"use client";

interface Props {
  handleClick: () => void;
  show: boolean;
}
export default function Button({ handleClick, show }: Props) {
  return (
    <div
      className={`bg-[#8a2be2] w-fit text-white text-[1.2rem] md:text-[2rem]  border-none rounded-2xl cursor-pointer  shadow-lg shadow-[#d8b4fe]  fixed left-1/2  -translate-x-1/2 ${show ? "bottom-4" : "-translate-y-1/2 top-1/2"} transition-all duration-500 animate-glow`}
    >
      <button
        onClick={handleClick}
        className={`
           p-3 md:p-4 cursor-pointer  flex items-center justify-center
          ${!show && "animate-shake"}`}
      >
        {show ? " 😉 تشوفيها تاني" : "😁 ادخلي برجلك اليمين يا مزة "}
      </button>
    </div>
  );
}
