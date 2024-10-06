import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { useParams } from "react-router-dom";
import character from "@/assets/images/quizCharacter.svg";
import trees from "@/assets/images/trees.svg";
import Bubble from "@/assets/images/Bubble.png";
import bubbles_all from "@/assets/images/bubbles_all.webp";
import PrimaryButtons from "@/components/common/PrimaryButtons";
import { quizData } from "@/constant/quizData";

export default function SingleQuiz() {
  const [qIndex, setQIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({}); // Tracks selected answers
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Tracks whether the quiz is submitted

  const { id } = useParams();
  const quiz = quizData.find((q) => q.quizId === id);

  // Handle option selection
  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionId,
    });
  };

  // Handle quiz submission
  const handleSubmitQuiz = () => {
    setIsQuizCompleted(true);
  };

  // Calculate result
  const calculateResult = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      if (selectedOptions[question.questionId] === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  return (
    <Container className="relative h-full overflow-hidden">
      <img
        src={trees}
        alt="waves"
        className="absolute right-56 -bottom-[50px] w-[200px]"
      />
      <div className="flex items-center justify-center h-full gap-10 text-white">
        {/* left */}
        <div className="w-full">
          {/* Title */}
          {!isQuizCompleted ? (
            <>
              <h4 className="text-6xl">
                {quiz.questions[qIndex].questionText}
              </h4>

              {/* Options */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                {quiz.questions[qIndex].options.map((option) => (
                  <button
                    key={option.optionId}
                    onClick={() =>
                      handleOptionSelect(
                        quiz.questions[qIndex].questionId,
                        option.optionId
                      )
                    }
                    className={`p-2 py-4 text-2xl tracking-wide transition-all duration-500 border-2 border-white select-none rounded-2xl hover:bg-white hover:text-themeColor ${
                      selectedOptions[quiz.questions[qIndex].questionId] ===
                      option.optionId
                        ? "bg-white text-themeColor"
                        : ""
                    }`}
                  >
                    {option.optionText}
                  </button>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center w-full mt-10 space-x-5">
                <PrimaryButtons
                  disabled={qIndex === 0}
                  onClick={() => {
                    if (qIndex > 0) {
                      setQIndex(qIndex - 1);
                    }
                  }}
                  className="mt-4 cursor-pointer p-7 text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-white text-[#2782FF] rounded-xl"
                >
                  Prev
                </PrimaryButtons>
                {qIndex === quiz.questions.length - 1 ? (
                  <PrimaryButtons
                    disabled={
                      !selectedOptions[quiz.questions[qIndex].questionId]
                    }
                    onClick={handleSubmitQuiz}
                    className="mt-4 cursor-pointer p-7 text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-themeColor hover:text-themeColor border-2 text-white rounded-xl"
                  >
                    Submit Quiz
                  </PrimaryButtons>
                ) : (
                  <PrimaryButtons
                    disabled={
                      !selectedOptions[quiz.questions[qIndex].questionId]
                    }
                    onClick={() => {
                      if (qIndex < quiz.questions.length - 1) {
                        setQIndex(qIndex + 1);
                      }
                    }}
                    className="mt-4 p-7 cursor-pointer text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-white text-[#2782FF] rounded-xl"
                  >
                    Next
                  </PrimaryButtons>
                )}
              </div>
            </>
          ) : (
            <div>
              <h3 className="mb-4 text-4xl">Results</h3>
              <div>
                {quiz.questions.map((question) => (
                  <div
                    key={question.questionId}
                    className="p-5 mb-4 text-white border-2 border-white font-secondary bg-white/30 backdrop-blur-2xl rounded-3xl"
                  >
                    <h4 className="text-2xl font-bold">
                      {question.questionText}
                    </h4>
                    <p>Your Answer: {selectedOptions[question.questionId]}</p>
                    <p>Correct Answer: {question.answer}</p>
                    <p
                      className={
                        selectedOptions[question.questionId] === question.answer
                          ? "text-green-500 font-bold text-2xl"
                          : "text-red-500 font-bold text-2xl"
                      }
                    >
                      {selectedOptions[question.questionId] === question.answer
                        ? "✅"
                        : "❌"}
                    </p>
                  </div>
                ))}
                <h4 className="mt-5 text-2xl">
                  Total Correct: {calculateResult()} / {quiz.questions.length}
                </h4>
              </div>
            </div>
          )}
        </div>

        {/* right */}
        <div className="relative flex items-center justify-center w-full">
          <img
            src={bubbles_all}
            alt=""
            className="w-[500px] rotate-90 h-full z-10 absolute right-[300px] translate-x-44 -translate-y-12"
          />
          <img src={Bubble} alt="" className="w-[50px] z-10 absolute -top-20" />
          <img src={character} alt="" className="w-[500px] z-10 " />
          <img
            src={Bubble}
            alt=""
            className="w-[50px] z-10 absolute left-[30px] bottom-16 "
          />
        </div>
      </div>
    </Container>
  );
}
