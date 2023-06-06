import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Command from "./components/Command";
import {
  experiences,
  help,
  history,
  opening,
  profile,
  skills,
  socials,
} from "./constants/output";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<React.ReactNode[]>([
    `Last login: ${dayjs().format("ddd MMM D HH:mm:ss")} on ttys000`,
  ]);
  console.log("🚀 ~ file: App.tsx:21 ~ App ~ output:", output);

  const [userIp, setUserIp] = useState("Failed to get your IP address");

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org/?format=json");
        const jsonResponse = await res.json();
        setUserIp(jsonResponse.ip);
      } catch (error) {
        setUserIp("Failed to get your IP address");
      }
    };
    getIp();
  }, []);

  const [histories, setHistories] = useState<string[]>([]);

  const handleSubmit = () => {
    const inputedData = <InputField input={input} />;
    const trimmedInput = input.replace(/(\r\n|\n|\r)/gm, "");

    const [command, args] = trimmedInput.split(" ");

    setOutput((prev) => {
      let data: React.ReactNode = "";

      switch (command) {
        case "help":
          data = help;
          break;

        case "whoami":
          data = userIp;
          break;

        case "whois":
          data = profile;
          break;

        case "social":
          data = socials;
          break;

        case "skills":
          data = skills;
          break;

        case "open":
          data = opening(args);
          window.open(args);
          break;

        case "history":
          data = history(histories);
          break;

        case "mail":
          data = opening("mailto:dodiaridharma@gmail.com");
          window.open(`mailto:dodiaridharma@gmail.com`);
          break;

        case "website":
          data = opening("dodi-aditya.vercel.app");
          window.open(`https://dodi-aditya.vercel.app`);
          break;

        case "experiences":
          data = experiences;
          break;

        case "clear":
          return [];

        default:
          data = (
            <span className="text-red-400">
              Command not found: {trimmedInput}. For a list of commands, type{" "}
              <Command className="pl-2">'help'</Command>
            </span>
          );
          break;
      }

      return [...prev, inputedData, data];
    });

    setInput("");
    setHistories((prev) => [...prev, trimmedInput]);
  };

  return (
    <main className="font-sf-mono bg-black bg-opacity-90 min-h-screen w-screen text-white">
      <Header />
      <div className="px-4 pb-4 pt-10 text-sm">
        {output.map((o, index) => {
          return (
            <div className="flex items-center mb-[2px]" key={index}>
              {o}
            </div>
          );
        })}

        <InputField
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          isEditable
        />
      </div>
    </main>
  );
};

export default App;
