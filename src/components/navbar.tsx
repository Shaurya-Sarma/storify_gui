import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-white border-b-2 border-gray-300 py-8 px-12 ">
        <Link to="/generate">
          <span
            className="text-5xl font-bold cursor-pointer select-none transition-colors hover:text-red-600"
            onClick={() => {}}
          >
            ×
          </span>
        </Link>
        <div className="flex col-auto">
          <h1 className="text-black text-5xl font-semibold">Storify</h1>
          <h3 className="text-black text-2xl font-normal self-end mx-2 low-highlight px-2">
            powered with AI
          </h3>
        </div>
        <span />
      </div>
    </>
  );
}

export default Navbar;
