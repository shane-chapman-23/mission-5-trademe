import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="h-full w-full pt-50 flex justify-center gap-5">
        <div className="bg-blue-400 h-50 w-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-700 hover:border-6 hover:bg-black hover:text-white">
          <h1 className="text-5xl">Shane</h1>
          <h3>Comparison Feature</h3>
        </div>
        <Link to="/listing">
          <div className="bg-red-400 h-50 w-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-red-700 hover:border-6 hover:bg-black hover:text-white">
            <h1 className="text-5xl">Kenneth</h1>
            <h3>Bidding Tutorial</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
