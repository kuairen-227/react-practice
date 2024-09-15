import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-gray-800 z-10 h-16 flex items-center justify-between px-4 shadow-md">
      <Link
        to="/"
        className="text-gray-300 text-xl font-bold hover:text-white transition-colors"
      >
        Project Management Tool
      </Link>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-600 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-500 hover:text-white transition-colors">
          新規プロジェクト
        </button>
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 font-bold hover:bg-gray-500 hover:text-white transition-colors">
          U
        </div>
      </div>
    </header>
  );
};
