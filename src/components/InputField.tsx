import React, { useRef, useState } from "react";

type InputFieldProps = {
  input: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  isEditable?: boolean;
  onSubmit?: () => void;
};

const InputField: React.FC<InputFieldProps> = ({
  input,
  setInput,
  isEditable,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [caretIndex, setCaretIndex] = useState(0);

  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className="flex items-center flex-wrap"
      onClick={() => (isEditable ? inputRef.current?.focus() : null)}
    >
      <div className="flex items-center mr-2">
        <div className="bg-zinc-700 pl-3 pr-2 h-[20px] flex items-center -ml-4">
          <span className="font-sans text-lg">
            <img src="apple.svg" className="max-h-[15px]" />
          </span>
          <div className="w-[1px] bg-gray-500 h-[22px] mx-2" />
          <span className="font-mono text-sm mr-2">📂</span>
          <span className="text-sky-500 font-semibold">~/dodi-aditya</span>
          <div className="w-[1px] bg-gray-500 h-[22px] mx-2" />
          <span>on</span>
          <div className="mx-2 flex gap-2 items-center">
            <img src="github.svg" className="max-h-[18px]" />
            <img src="branch.png" className="max-h-[14px]" />
          </div>
          <span className="text-lime-400 font-semibold">master</span>
        </div>

        <div
          style={{
            borderTop: "10px solid transparent",
            borderBottom: "10px solid transparent",
            borderLeft: "10px solid rgb(113 113 122)",
          }}
        />
      </div>
      {/* <p className="mr-2">visitor@dodi-aditya.vercel.app:~$ </p> */}
      {isEditable ? (
        <textarea
          className="absolute left-[-1000px]"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput?.(e.target.value)}
          onKeyUp={(e) => setCaretIndex(e.currentTarget.selectionStart)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit?.();
            }
          }}
        />
      ) : null}
      <div className="flex items-center">
        {input
          .replace(/(\r\n|\n|\r)/gm, "")
          .split("")
          .map((i, index) => {
            return (
              <span key={index} className="w-[9px]">
                {i}
              </span>
            );
          })}
      </div>
      {isEditable && isFocus ? (
        <div
          style={{ left: `-${(input.length - caretIndex) * 9}px` }}
          className={`ml-[0.5px] w-[8px] h-[14px] bg-white bg-opacity-80 ${
            isFocus ? "animate-[blink_1.5s_linear_infinite]" : ""
          } relative`}
        />
      ) : null}
    </div>
  );
};

export default InputField;
