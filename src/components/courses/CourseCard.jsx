/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButtons from "../common/PrimaryButtons";

const CourseCard = ({ item }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }, []); // Added dependency array to prevent continuous re-renders

  return (
    <div className="flex bg-white border shadow backdrop-blur-2xl border-zinc-200 rounded-2xl">
      <div className="w-full h-full p-5 overflow-hidden">
        <img
          src={item.moduleImage}
          className="w-full h-[300px] object-cover  rounded-xl"
          alt=""
        />
      </div>
      <div className="p-4 py-5">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h5 className="text-xl text-themeColor font-primary">
              {item.moduleName}
            </h5>
            <p className="text-sm font-secondary text-zinc-500">
              {item.moduleDescription.length > 150
                ? item.moduleDescription.substr(0, 150) + "..."
                : item.moduleDescription}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-full my-3 bg-zinc-300">
              <div
                className={cn("py-2 h-full bg-themeColor rounded-r-md")}
                style={{ width: `${number}%` }}
              ></div>
            </div>
            <h4 className="text-themeColor">{number}%</h4>{" "}
          </div>
          <div className="mb-[5px]">
            <div className="flex gap-x-2">
              <Link to={`/courses/${item.moduleId}`}>
                <PrimaryButtons className="text-white rounded-md bg-themeColor hover:bg-themeColor">
                  Continue Course
                </PrimaryButtons>
              </Link>
              <PrimaryButtons className="w-full transition-all bg-transparent border rounded-md hover:text-white hover:bg-themeColor">
                Outline
              </PrimaryButtons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
