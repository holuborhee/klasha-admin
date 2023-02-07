import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from './logo.svg';
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function App() {
  return (
    <div className="h-full">
      <Sidebar />
      <section className="h-full inline-block align-top overflow-auto w-9/12">
        <header className="border-b-2 border-[#EDEDED] mb-24 py-6 flex justify-end px-5">
          <div className="flex items-center">
            <button className="flex text-xl w-14 justify-between mr-9"><FaUserCircle /> <FaChevronDown /></button>
            <button className="flex items-center text-xl w-14 justify-between"><span>En</span> <FaChevronDown /></button>
          </div>
        </header>
        <main className="mx-8">
          <Outlet  />
        </main>
      </section>
    </div>
  );
}

export default App;
