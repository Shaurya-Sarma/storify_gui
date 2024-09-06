import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../constants/global";

interface Props {
  progress: any;
  setProgress: (progress: any) => any;
  hasRevealed: boolean;
  setHasRevealed: (b: any) => any;
}

function QuizButton(props: Props) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function getImages() {
    return axios
      .get(`${API_URL}/SD-images`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <button
        className="button-66 py-3 px-5 text-xl"
        title="Submit"
        role="button"
        disabled={!props.hasRevealed || isClicked}
        onClick={() => {
          props.setHasRevealed(false);
          props.setProgress(props.progress + 1);

          if (props.progress >= 4) {
            setIsClicked(true);
            navigate("/loading");
            getImages().then((res) => {
              console.log(res);
              navigate("/storybook", { state: { images_base64: res } });
            });
          }
        }}
      >
        {props.progress >= 4 ? "Done" : "Next"}
      </button>
    </>
  );
}

export default QuizButton;
