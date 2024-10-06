import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { milestone } from "@/constant/milestone";
import { useParams } from "react-router-dom";
import tick from "@/assets/images/tick.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import AiAssistant from "@/components/aiAssistant/AiAssistant";

const Course = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const { id } = useParams();
  const module = milestone.find((item) => item.moduleId === id);

  const containerHeight = "h-[calc(100vh-102px)] ";

  console.log(selectedContent);
  return (
    <section className="overflow-hidden">
      <div className="grid h-full grid-cols-12">
        <div className="border-r-[2px] border-b-[2px] col-span-3 border-white w-full h-full">
          <ScrollArea className={`${containerHeight}`}>
            <div>
              {module.lessons.map((item, index) => (
                <div key={index} className="border-b">
                  <Accordion
                    type="single"
                    collapsible
                    className="text-white bg-themeColor hover:no-underline "
                  >
                    <AccordionItem
                      value="item-1"
                      className="border-b-zinc-900 "
                    >
                      <AccordionTrigger className="px-2 hover:no-underline">
                        <h3 className="text-xl">{item.lessonName}</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.contents.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedContent(item)}
                            className="px-2 py-2 mx-2 mt-2 text-black rounded cursor-pointer bg-white/30 backdrop-blur-2xl font-secondary"
                          >
                            <div className="flex items-start space-x-2">
                              <img src={tick} alt="" />{" "}
                              <h4>{item.contentName}</h4>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* content */}
        <div className="border-r-[2px] border-b-[2px] col-span-6 border-white w-full h-full">
          <ScrollArea className={`${containerHeight}`}>
            <div className="h-full">
              <div className="w-full h-[400px] bg-zinc-300 ">
                {selectedContent.blogPost?.image && (
                  <img
                    src={selectedContent.blogPost.image}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                )}
              </div>
              {/*  */}
              {selectedContent?.blogPost && (
                <div className="h-full p-2 bg-white/60 backdrop-filter">
                  <h3 className="text-4xl text-black">
                    {selectedContent.blogPost.title}
                  </h3>
                  <p className="mt-5 text-black font-secondary">
                    {selectedContent.blogPost.body}
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
        {/* ai assistant */}
        <div
          className={`border-r-[2px] border-b-[2px] col-span-3 border-white w-full h-full`}
        >
          <AiAssistant containerHeight={containerHeight} />
        </div>
      </div>
    </section>
  );
};

export default Course;
