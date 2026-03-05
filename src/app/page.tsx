"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useRef, useState } from "react";
export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  async function handleClick() {
    setIsOn(!isOn);
    if (!isOn && audioRef.current) {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }
  return (
    <main>
      <div className="fixed md:left-1/2 md:-translate-x-1/2 m-4 md:m-0 md:mt-5 ">
        {isOn && <Card show={isOn} />}
      </div>
      <Button handleClick={handleClick} show={isOn} />
      <audio src="/birthday.wav" loop hidden ref={audioRef}></audio>
    </main>
  );
}
