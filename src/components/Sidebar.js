import NavGroup from './NavGroup';
import { Link } from "react-router-dom";

function Sidebar() {

  const mainPagesLinks = [
    { text: "Dashboard", url: "/" },
    { text: "Balances" }, 
    { text: "Transactions" }, 
    { text: "Analytics" },
    { text: "Marketing" },
    { text: "Exchange rates" },
  ];
  const acceptPaymentLinks = [ { text: "Checkout" }, { text: "Payment Links" }, ];
  const sendPaymentLinks = [ { text: "Wire" }, ]

  return (
    <div className="bg-[#FFFBF7] w-3/12 h-full inline-block align-top overflow-auto relative">
      <h1>Klasha</h1>

      <NavGroup title="Main Pages" links={mainPagesLinks} />
      <NavGroup title="Accept Payments" links={acceptPaymentLinks} />
      <NavGroup title="Send Payments" links={sendPaymentLinks} />

      <div className="absolute bottom-0">
        <Link to="#">Support</Link>
        <button>Hide Panel</button>
      </div>
    </div>
  );
}

export default Sidebar;