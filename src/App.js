import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from './logo.svg';
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const isMobileDevice = window.matchMedia("only screen and (max-width: 767px)").matches;
    setShowSidebar(!isMobileDevice)
  }, []);

  return (
    <div className="h-full w-full 2xl:w-8/12 xl:w-11/12 xl:m-auto">
      <Sidebar show={showSidebar} onHidePanel={setShowSidebar} />
      <section className={`${showSidebar ? 'md:w-9/12 w-5/12' : 'w-full'} h-full inline-block align-top overflow-auto`}>
        <header className={`${showSidebar ? 'justify-end' : 'justify-between'} flex items-center border-b-2 border-[#EDEDED] mb-24 py-6 px-5`}>
          {!showSidebar && <RxHamburgerMenu className="cursor-pointer font-semibold text-3xl" onClick={() => setShowSidebar(true)} />}
          <div className="flex items-center">
            <button className="flex text-xl w-14 justify-between mr-9"><FaUserCircle /> <FaChevronDown /></button>
            <button className="flex items-center text-xl w-14 justify-between"><span>En</span> <FaChevronDown /></button>
          </div>
        </header>
        <main className="md:mx-8">
          <Outlet  />
        </main>
      </section>
    </div>
  );
}

export default App;
