import { useEffect, useState } from "react";

interface Props {
  letter: string;
  text: string;
  correct: boolean;
  hasRevealed: boolean;
  setHasRevealed: any;
}

function AnswerBox(props: Props) {
  const [showStyling, setShowStyling] = useState(false);

  useEffect(() => {
    setShowStyling(false);
  }, [props.hasRevealed]);

  return (
    <>
      <div
        className={
          "flex bg-white border-2 border-gray-300 h-fit rounded-lg mt-3.5 cursor-pointer select-none group hover:border-blue-400 transition"
        }
        style={
          showStyling || props.hasRevealed
            ? props.correct
              ? {
                  borderColor: "#22c55e",
                  transition: "none",
                }
              : {
                  borderColor: "#ef4444",
                  transition: "none",
                }
            : {}
        }
        onClick={() => {
          if (props.correct) {
            setShowStyling(true);
            props.setHasRevealed(true);
          } else if (props.correct == false) {
            setShowStyling(true);
          }
        }}
      >
        <p
          className="px-4 h-full font-semibold self-center text-xl"
          style={
            showStyling || props.hasRevealed
              ? props.correct
                ? {
                    color: "#22c55e",
                    scale: "125%",
                  }
                : {
                    color: "#ef4444",
                    scale: "150%",
                  }
              : {}
          }
        >
          {showStyling || props.hasRevealed
            ? props.correct
              ? "✓"
              : "×"
            : props.letter}
        </p>
        <span
          className="border-l-2 py-3 px-3 border-gray-300 h-full self-center text-xl group-hover:border-blue-400 transition"
          style={
            showStyling || props.hasRevealed
              ? props.correct
                ? {
                    borderColor: "#22c55e",
                    transition: "none",
                  }
                : { borderColor: "#ef4444", transition: "none" }
              : {}
          }
        >
          {props.text}
        </span>
      </div>
    </>
  );
}

export default AnswerBox;
