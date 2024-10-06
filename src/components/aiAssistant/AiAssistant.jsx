/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import send from "@/assets/images/send.svg";
const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: "user", name: "Md Alamin", text: "Hello, seaseek Ai?" },
    { sender: "ai", text: "Hello, how can I help you?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const predefinedResponses = {
    hello: "Hi, how can I help you?",
    hi: "Hello! how can I help you?",
    help: "Sure, I'm here to help. What do you need?",
    thanks: "You're welcome!",
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      sender: "user",
      name: "Md Alamin",
      text: inputValue.trim(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const userMessageText = newMessage.text.toLowerCase();
      const aiReplyText =
        predefinedResponses[userMessageText] ||
        "Thanks for your message! I will reply to you a few days later.🤖";
      const aiReply = {
        sender: "ai",
        text: aiReplyText,
      };
      setMessages((prevMessages) => [...prevMessages, aiReply]);
    }, 500);
  };

  return (
    <article className="h-full bg-themeColor backdrop-blur-3xl ">
      <div className="flex flex-col justify-between h-full ">
        {/* chats */}
        <ScrollArea
          className={`max-h-[calc(100vh-165px)] h-full overflow-y-auto `}
        >
          <div className="h-full p-2 space-y-2 ">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  style={{ width: "fit-content" }}
                  className={`py-2 px-3 rounded max-w-[80%]  ${
                    message.sender === "user"
                      ? "text-white font-secondary bg-primary"
                      : " font-secondary bg-zinc-200 text-primary"
                  }`}
                >
                  {message.sender === "user" && (
                    <h6 className="font-bold text-white ">{message.name}</h6>
                  )}
                  <p
                    className={
                      message.sender === "user"
                        ? "text-neutral-200 font-secondary"
                        : ""
                    }
                  >
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        {/* chat box */}
        <div className="w-full max-h-[150px] relative">
          <div
            className="absolute flex items-center justify-center p-2 rounded-full cursor-pointer group right-2 top-3 bg-themeColor"
            onClick={sendMessage}
          >
            <img
              src={send}
              className="transition-transform size-7 -rotate-12 group-hover:rotate-0"
              alt="Send"
            />
          </div>
          <textarea
            name="prompt"
            id="prompt"
            className="w-full h-full p-4 border-t-[2px] font-secondary outline-none resize-none border-white pr-12 c-s"
            rows="1"
            placeholder="Type your prompt here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default AiAssistant;
