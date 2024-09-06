import { useState } from "react";
import Navbar from "./navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../constants/global";

function Reader() {
  const [textSize, setTextSize] = useState(30);
  const [lineHeight, setLineHeight] = useState(6);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function getQuestionBank() {
    return axios
      .get(`${API_URL}/quiz-questions`)
      .then((response) => {
        return response.data.questions;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="mx-auto w-8/12 h-[80dvh] pr-5 scroll-smooth overflow-y-auto relative">
          <p
            style={{
              fontSize: `${textSize}px`,
              lineHeight: `${lineHeight}rem`,
            }}
          >
            {!location.state
              ? "Something went wrong. Please try again."
              : location.state.text}
          </p>
        </div>
        <div className="absolute bottom-6 left-6">
          <button
            className="button-39"
            onClick={() => {
              if (textSize > 14 && textSize <= 120) {
                setTextSize(textSize - 2);
                if (textSize >= 12 && textSize < 20) setLineHeight(5);
                else if (textSize >= 20 && textSize < 40) setLineHeight(6);
                else if (textSize >= 40 && textSize < 80) setLineHeight(8);
                else if (textSize >= 80) setLineHeight(10);
              }
            }}
          >
            a
          </button>
          <button
            className="button-39"
            onClick={() => {
              if (textSize >= 14 && textSize < 120) {
                setTextSize(textSize + 2);
                if (textSize >= 12 && textSize < 20) setLineHeight(5);
                else if (textSize >= 20 && textSize < 40) setLineHeight(6);
                else if (textSize >= 40 && textSize < 80) setLineHeight(8);
                else if (textSize >= 80) setLineHeight(10);
              }
            }}
          >
            A
          </button>
        </div>
        <div className="absolute bottom-6 right-6">
          <button
            className="button-39"
            disabled={!location.state || isClicked}
            onClick={() => {
              setIsClicked(true);
              navigate("/loading");
              getQuestionBank().then((res) => {
                for (let i = 1; i <= 5; i++) {
                  // shuffle answers
                  res[i]["answers"].sort(() => Math.random() - 0.5);
                }
                navigate("/quiz", { state: { questionBank: res } });
              });
            }}
          >
            Continue
          </button>
        </div>
        <div />
      </div>
    </>
  );
}

export default Reader;
