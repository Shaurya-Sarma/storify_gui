import ProgressBar from "react-bootstrap/ProgressBar";
import AnswerBox from "./answerbox";
import { ReactNode, useState } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import QuizButton from "./quiz-button";

function Quiz() {
  const [progress, setProgress] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);
  const location = useLocation();
  const questionBank = !location
    ? null
    : !location.state
    ? null
    : location.state.questionBank;
  const letterChoices = ["A", "B", "C", "D"];

  function extractQuestions(): string {
    if (progress >= 5) return "";
    return `${progress + 1}. ${questionBank[progress + 1]["question"]}`;
  }

  function extractAnswers(): ReactNode {
    if (progress >= 5) return <></>;
    let answerNodes = [];
    for (let i = 0; i < 4; i++) {
      answerNodes.push(
        <AnswerBox
          letter={letterChoices[i]}
          text={questionBank[progress + 1]["answers"][i]["text"]}
          correct={questionBank[progress + 1]["answers"][i]["correct"]}
          hasRevealed={hasRevealed}
          setHasRevealed={setHasRevealed}
          key={i}
        />
      );
    }
    return answerNodes;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="w-3/5 mx-auto flex flex-col justify-center ">
          <h4 className="text-xl font-bold">
            {!questionBank ? `Something went wrong.` : extractQuestions()}
          </h4>
          {!questionBank ? "Please try again." : extractAnswers()}
          <div className="text-right mt-4">
            <QuizButton
              progress={progress}
              setProgress={setProgress}
              hasRevealed={hasRevealed}
              setHasRevealed={setHasRevealed}
            />
          </div>
        </div>
        <div className="mb-16 w-11/12 mx-auto bg-white card-shadow py-4 px-4 rounded-2xl select-none">
          <ProgressBar animated min={0} max={5} now={progress} />
        </div>
      </div>
    </>
  );
}

export default Quiz;
