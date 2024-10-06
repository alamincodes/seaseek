import React from "react";
import HomeCharacter from "@/assets/images/HomeCharacter.svg";
import Sands from "@/assets/images/Sands.svg";
import Starfish from "@/assets/images/Starfish.svg";
import Fish from "@/assets/images/Fish.svg";
import homeTrees from "@/assets/images/homeTrees.svg";
import bubbles_all from "@/assets/images/bubbles_all.webp";
import { Container } from "@/components/common/Container";
import wavesImg from "@/assets/images/waves.svg";

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden">
      <img src={wavesImg} alt="waves" className="fixed left-0 right-0 w-full" />
      <Container className="flex items-center justify-center h-full overflow-hidden">
        <div className="flex items-center text-white">
          {/* left */}
          <div className="relative z-10 w-full">
            <img src={HomeCharacter} alt="" className="w-[700px] z-10" />
            <img
              src={bubbles_all}
              alt=""
              className="absolute w-full -rotate-180 -left-20 -top-10"
            />

            {/* fishes */}
            <img src={Fish} alt="" className="absolute right-0 w-24" />
            <div className="absolute -bottom-[150px] right-36">
              <img src={Starfish} alt="" className="w-16" />
            </div>
          </div>
          {/* right */}
          <div className="relative w-full">
            <img
              src={bubbles_all}
              alt=""
              className="absolute w-full -rotate-180 -left-20 -top-10"
            />
            <img
              src={bubbles_all}
              alt=""
              className="absolute w-full -left-20 top-10"
            />
            <h1 className="text-right text-9xl">Dive into</h1>
            <h3 className="z-10 mt-3 text-right text-7xl">Ocean</h3>
            <p className="mt-3 text-xl text-right font-secondary">
              We’re inspired to make it simple and engaging for students,
              helping them understand our oceans. Our curriculum teaches
              students to explore PACE data, map ocean ecosystems with real-time
              data, and engage through quizzes and virtual field trips, making
              learning fun and interactive.
            </p>
          </div>
        </div>
      </Container>
      <img
        src={Sands}
        alt=""
        className="absolute right-0 object-cover w-full -bottom-[90px]"
      />
      <img
        src={homeTrees}
        alt=""
        className="absolute -left-5 object-cover w-[260px] -bottom-10"
      />
    </div>
  );
}
