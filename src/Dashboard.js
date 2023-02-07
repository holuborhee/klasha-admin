import SalesCardWithGraph from './components/SalesCardWithGraph';
import ReportGraph from './components/ReportGraph';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2 className="text-lg">Sales Overview</h2>
      <div className="flex justify-between my-10">
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

      <div className="grid grid-cols-7 gap-4">
        <div className="flex justify-between col-span-5">
          <h5>Sales</h5>
          <input type="radio" name="days" value="7" />
          <input type="radio" name="days" value="7" />
          <select name="currency">
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
          </select>
          <input type="email" name="email" />
          <input type="submit" name="submit-report" value="Download report" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <ReportGraph className="col-span-5" />
        <div className="rounded-lg bg-primary col-span-2 text-white p-5 flex flex-col justify-between">
          <p className="text-xl">KlashaWire - send money to businesses globally from Africa</p>
          <Link to="#" className="bg-black px-6 py-3 self-start rounded-lg">Send a wire</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;