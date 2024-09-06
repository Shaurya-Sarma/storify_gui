import { PacmanLoader } from "react-spinners";

export default function PageLoader() {
  return (
    <>
      <div className="min-h-screen bg-[#FAFBFD] flex flex-col justify-center items-center">
        <PacmanLoader
          color={"#0a6bff"}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={`${2}rem`}
          className="m-5"
        />
        <p className="font-bold text-5xl">Loading in progress</p>
        <p className="text-black text-lg my-10">
          <i>Please hang on a moment</i>
        </p>
      </div>
    </>
  );
}
