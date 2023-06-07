import clsx from "clsx";
import React, { useRef, useState } from "react";

type InputFieldProps = {
  input: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  isEditable?: boolean;
  onSubmit?: () => void;
  isError?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  input,
  setInput,
  isEditable,
  onSubmit,
  isError,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [caretIndex, setCaretIndex] = useState(0);

  const [isFocus, setIsFocus] = useState(false);

  const stick = (
    <>
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
        <span className="text-lime-400 font-semibold">main</span>
      </div>
      <div
        style={{
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderLeft: "10px solid rgb(113 113 122)",
        }}
      />
    </>
  );

  return (
    <div
      className={clsx("flex items-center flex-wrap", {
        ["-mb-[2px]"]: !isEditable,
      })}
      onClick={() => (isEditable ? inputRef.current?.focus() : null)}
    >
      <div
        className={clsx(`flex items-center mr-2`, {
          ["text-red-500"]: !isEditable && isError,
          ["text-green-500"]: !isEditable && !isError,
        })}
      >
        {isEditable ? stick : ">"}
      </div>

      {isEditable ? (
        <textarea
          autoFocus
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
      {isEditable ? (
        <div
          style={{ left: `-${(input.length - caretIndex) * 9}px` }}
          className={clsx(
            `ml-[0.5px] w-[8px] h-[14px] bg-white bg-opacity-80 relative`,
            { ["animate-[blink_1.5s_linear_infinite]"]: isFocus }
          )}
        />
      ) : null}
    </div>
  );
};

export default InputField;
