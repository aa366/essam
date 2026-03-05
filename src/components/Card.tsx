"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

interface Props {
  show: boolean;
}
export default function Card({ show }: Props) {
  console.log(show);

  return (
    <div
      className={`  flex flex-col gap-3  justify-center items-center bg-purple-700  min-w-fit rounded-2xl p-3 transition-all duration-500  animate-glow`}
    >
      <h1 className=" text-sm md:text-xl p-3 text-center animate-ping ">
        Happy Birthday 🎉
      </h1>

      {/* <!-- استخدم الاسم الرقمي الطويل هنا --> */}
      <div className=" flex  gap-2 md:gap-5">
        <Image
          src="/imgs/girl.png"
          alt="photo"
          width={200}
          height={200}
          className=" aspect-auto w-30 md:w-50"
        />

        <Image
          src="/imgs/cake.png"
          alt="photo"
          width={200}
          height={200}
          className=" aspect-auto w-30 md:w-50"
        />
      </div>

      <div className="break-word text-center max-w-100">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                ` كل عام وانتي في صحه وسعاده واتمني ليك كل الخير ويارب تتهني في حياتك
          وتكون بداية افراحك ونهاية احزانك`,
              )
              .pauseFor(300)
              .start();
          }}
        />
      </div>
    </div>
  );
}
