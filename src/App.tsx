import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Command from "./components/Command";
import {
  echo,
  educations,
  experiences,
  help,
  history,
  openUrl,
  opening,
  profile,
  skills,
  socials,
  welcome,
} from "./constants/output";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<React.ReactNode[]>([
    `Last login: ${dayjs().format("ddd MMM D HH:mm:ss")}`,
    welcome,
  ]);

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
  const [activeHistory, setActiveHistory] = useState(-1);

  const decrementHistory = () => {
    setActiveHistory((prev) =>
      prev === -1 ? histories.length - 1 : prev > 0 ? prev - 1 : prev
    );
  };

  const incrementHistory = () => {
    setActiveHistory((prev) => (prev < histories.length ? prev + 1 : prev));
  };

  const handleSubmit = () => {
    const trimmedInput = input.replace(/(\r\n|\n|\r)/gm, "");

    const [command, args] = trimmedInput.split(" ");

    if (command) {
      setOutput((prev) => {
        let data: React.ReactNode = "";
        let isError = false;

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

          case "projects":
            data = opening("Lists of work projects");
            openUrl("https://dodi-aditya.vercel.app/projects");
            break;

          case "open":
            if (args) {
              data = opening(args);
              openUrl(args);
            }
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

          case "exp":
            data = experiences;
            break;

          case "edu":
            data = educations;
            break;

          case "welcome":
            data = welcome;
            break;

          case "echo":
            data = echo(trimmedInput);
            break;

          case "clear":
            return [];

          default:
            isError = true;
            data = (
              <div className="text-red-400 mb-1">
                Command not found: {command}.{" "}
                <span className="text-gray-100">
                  For a list of commands, type
                </span>
                <Command className="pl-2">'help'</Command>
              </div>
            );
            break;
        }

        return [
          ...prev,
          <InputField input={trimmedInput} isError={isError} />,
          data,
        ];
      });
    } else {
      setOutput((prev) => [...prev, <InputField input={trimmedInput} />, ""]);
    }

    setInput("");
    setActiveHistory(-1);
    setHistories((prev) => (trimmedInput ? [...prev, trimmedInput] : prev));
  };

  useEffect(() => {
    if (activeHistory !== -1) {
      setInput(histories[activeHistory] || "");
    }
  }, [activeHistory, histories]);

  return (
    <main className="font-sf-mono min-h-screen w-screen text-white font-m overflow-x-auto min-w-[768px]">
      <Header />
      <div className="px-4 pb-4 pt-10 text-sm">
        {output.map((o, index) => {
          return (
            <div className="mb-[2px]" key={index}>
              {o}
            </div>
          );
        })}

        <InputField
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          isEditable
          incrementHistory={incrementHistory}
          decrementHistory={decrementHistory}
        />
      </div>
    </main>
  );
};

export default App;
