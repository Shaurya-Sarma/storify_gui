import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import API_URL from "../constants/global";

function Generator() {
  const [promptText, setPromptText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  function sendUserPrompt() {
    return axios
      .get(`${API_URL}/user-prompt/?prompt=${promptText}`)
      .then((response) => {
        console.log(response);
        console.log(response.status, response.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getStory() {
    return axios
      .get(`${API_URL}/story`)
      .then((response) => {
        console.log(response);
        return response.data.text;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center align-middle">
        <div className="flex justify-center">
          <h1 className="text-black text-6xl font-semibold">Storify</h1>
          <h3 className="text-black text-2xl font-normal self-end mx-2 low-highlight px-2">
            powered with AI
          </h3>
        </div>
        <div className="my-16 px-8 py-10 bg-white rounded-2xl card-shadow self-center w-3/4">
          <textarea
            title="prompt"
            placeholder="write a sentence..."
            className="w-full outline-none max-h-64"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            title="Submit"
            role="button"
            className="button-66 py-3 px-5 text-xl"
            disabled={promptText.trim() === "" ? true : false || isClicked}
            onClick={() => {
              setIsClicked(true);
              navigate("/loading");
              sendUserPrompt().then(() =>
                getStory()
                  .then((res) => {
                    console.log(res);
                    navigate("/reader", { state: { text: res } });
                  })
                  .catch((error) => {
                    console.error(error);
                  })
              );
            }}
          >
            Imagine!
          </button>
        </div>
      </div>
    </>
  );
}

export default Generator;
