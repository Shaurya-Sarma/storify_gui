import { useState } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function StoryBook() {
  const [progress, setProgress] = useState(1);
  const location = useLocation();
  const images = !location
    ? null
    : !location.state
    ? null
    : location.state.images_base64;

  function downloadBase64File(
    contentType: any,
    base64Data: any,
    fileName: string
  ) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="w-11/12 mx-auto flex justify-center h-[70dvh] ">
          <span
            className="text-4xl font-bold self-center cursor-pointer select-none rotate-180 text-gray-400 hover:text-gray-600 transition"
            onClick={() => {
              setProgress(progress - 1);
            }}
            style={progress <= 1 ? { visibility: "hidden" } : {}}
          >
            ➜
          </span>
          <div className="bg-white rounded-lg w-full mx-5 card-shadow border-2 border-gray-300 select-none relative flex justify-center ">
            <img
              alt="download"
              src="public\save-icon.png"
              className="absolute top-3 right-4 w-10 h-10 cursor-pointer"
              onClick={() => {
                // download current image
                downloadBase64File(
                  "image/png",
                  images[`image${progress}`],
                  `image${progress}`
                );
              }}
            />
            <img
              alt="ai-image"
              className="h-full card-shadow"
              src={`data:image/png;base64,${images[`image${progress}`]}`}
            />
          </div>
          <span
            className="text-4xl font-bold self-center cursor-pointer select-none text-gray-400 hover:text-gray-600 transition"
            onClick={() => {
              setProgress(progress + 1);
            }}
            style={
              progress >= Object.keys(images).length
                ? { visibility: "hidden" }
                : {}
            }
          >
            ➜
          </span>
        </div>
        <div />
      </div>
    </>
  );
}

export default StoryBook;
