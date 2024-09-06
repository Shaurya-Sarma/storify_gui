import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <div className="min-h-screen bg-[#FAFBFD] flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl">Uh...</h1>
        <p className="text-black text-lg my-10">Sorry, something went wrong.</p>
        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
