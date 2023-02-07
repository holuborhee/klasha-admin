import NavGroup from './NavGroup';
import { Link } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { RiArrowUpDownFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5"
import { FaChevronLeft } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

function Sidebar() {

  const mainPagesLinks = [
    { text: "Dashboard", url: "/", icon: <FaChartPie /> },
    { text: "Balances", icon: <IoBriefcaseOutline /> }, 
    { text: "Transactions", icon: <RiArrowUpDownFill /> }, 
    { text: "Analytics", icon: <FaSignal /> },
    { text: "Marketing", icon: <GrAnnounce /> },
    { text: "Exchange rates", icon: <FaSync /> },
  ];
  const acceptPaymentLinks = [ { text: "Checkout", icon: <BsCart /> }, { text: "Payment Links", icon: <FaLink /> }, ];
  const sendPaymentLinks = [ { text: "Wire", icon: <FaExchangeAlt /> }, ]

  return (
    <div className="bg-[#FFFBF7] w-3/12 h-full inline-block align-top overflow-auto relative pl-12 pt-10">
      <h1 className="mb-14">Klasha</h1>

      <NavGroup title="Main Pages" links={mainPagesLinks} />
      <NavGroup title="Accept Payments" links={acceptPaymentLinks} />
      <NavGroup title="Send Payments" links={sendPaymentLinks} />

      <div className="absolute bottom-10 flex flex-col h-28 justify-between">
        <Link to="#" className="flex justify-between items-center bg-primary rounded-full w-32 py-2 px-4 text-white">
         <FaRegQuestionCircle />
         Support
        </Link>
        <button className="flex justify-between items-center rounded-md border-black border-2 py-2 px-3">
          <FaChevronLeft />
          Hide Panel
        </button>
      </div>
    </div>
  );
}

export default Sidebar;