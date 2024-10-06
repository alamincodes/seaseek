import { Container } from "@/components/common/Container";
import React from "react";
import fishesImg from "@/assets/images/Fishes.svg";
import qShape from "@/assets/images/qShape.png";
import trees from "@/assets/images/trees.svg";
import PrimaryButtons from "@/components/common/PrimaryButtons";
import { Link } from "react-router-dom";
import { quizData } from "@/constant/quizData";
import wavesImg from "@/assets/images/waves.svg";

export default function Quiz() {
  return (
    <div>
      <img src={wavesImg} alt="waves" className="fixed left-0 right-0 w-full" />
      <Container className="relative h-full bg-center bg-cover hello">
        <img
          src={trees}
          alt="waves"
          className="fixed left-0 -bottom-[50px] w-[200px]"
        />
        <div className="grid grid-cols-1 mt-5 gap-14">
          {quizData.map((quiz) => (
            <Link to={`${/quiz/}${quiz.quizId}`} key={quiz.quizId}>
              <div className="relative flex items-start gap-6 p-6 mt-5">
                {/* <img
                src={fishesImg}
                alt=""
                className="size-[28] absolute -top-20 right-0 left-0 mx-auto"
              /> */}
                <div className="relative w-full">
                  <div
                    style={{ backgroundImage: `url(${qShape})` }}
                    className="w-[600px] h-[400px] bg-cover bg-no-repeat flex justify-center items-center"
                  >
                    <div className="w-[500px] h-[270px] bg-[#2782FF] -rotate-[3deg] rounded-2xl overflow-hidden">
                      <img
                        src={quiz.image}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full text-white">
                  <h1 className="text-6xl">{quiz.quizTitle}</h1>
                  <h3 className="text-3xl">And Its Mission</h3>
                  <p className="mt-5 text-xl font-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed tempor ligula. Donec aliquet, lacus viverra
                    ultrices fermentum, metus risus venenatis augue, eget
                    fermentum orci nisl at est
                  </p>
                  <div className="flex justify-center">
                    <PrimaryButtons className="mt-10">Start</PrimaryButtons>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
