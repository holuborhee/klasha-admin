import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from './logo.svg';

function App() {
  return (
    <div className="h-full">
      <Sidebar />
      <section className="h-full inline-block align-top overflow-auto w-9/12">
        <header className="border-b-2 border-[#EDEDED] mb-24">
          <span>link 1</span>
          <span>link 2</span>
        </header>
        <main className="mx-8">
          <Outlet  />
        </main>
      </section>
    </div>
  );
}

export default App;
