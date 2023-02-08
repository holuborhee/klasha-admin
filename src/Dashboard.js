import SalesCardWithGraph from './components/SalesCardWithGraph';
import ReportGraph from './components/ReportGraph';
import { Link } from "react-router-dom";
import { RiDownloadLine } from "react-icons/ri";

function Dashboard() {
  return (
    <div className="w-full">
      <h2 className="text-lg">Sales Overview</h2>
      <div className="flex justify-between my-10 w-full overflow-x-scroll">
        <div className="rounded-lg border-black border-[1px] w-64 h-60 p-5">
          <h5>Today's Sales</h5>
          <p className="text-xl font-medium mt-4">&#8358;1652.50</p>
        </div>
        <SalesCardWithGraph
          text="This week"
          amount={1652.50}
          dark
        />
        <SalesCardWithGraph
          text="This month"
          amount={1652.50}
        />
        <SalesCardWithGraph
          text="Last month"
          amount={1652.50}
        />
      </div>

      <div className="md:grid md:grid-cols-7 md:gap-4 mb-2 w-full">
        <div className="flex justify-between flex-wrap md:flex-nowrap md:col-span-5 items-center w-full">
          <h5 className="border-r-2 pr-2">Sales</h5>
          <input type="radio" checked name="days" id="rad-week" value="7" className="peer/week hidden" />
          <label className="peer-checked/week:text-primary cursor-pointer font-semibold" for="rad-week">7 days</label>
          <input type="radio" name="days" id="rad-month" value="30" className="peer/month hidden" />
          <label className="peer-checked/month:text-primary cursor-pointer font-semibold" for="rad-month">30 days</label>
          <select name="currency">
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
          </select>
          <input type="email" name="email" placeholder="Email" />
          <button name="submit-report" className="rounded-lg border border-black flex items-center px-2 py-1">
            <RiDownloadLine />
            Download report
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-7 md:gap-4">
        <ReportGraph className="md:col-span-5" />
        <div className="rounded-lg bg-primary md:col-span-2 text-white p-5 flex flex-col justify-between">
          <p className="text-xl">KlashaWire - send money to businesses globally from Africa</p>
          <Link to="#" className="bg-black px-6 py-3 self-start rounded-lg">Send a wire</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;