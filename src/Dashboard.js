import SalesCardWithGraph from './components/SalesCardWithGraph';
import ReportGraph from './components/ReportGraph';

function Dashboard() {
  return (
    <div>
      <h2>Sales Overview</h2>
      <div className="flex justify-between">
        <div className="rounded-lg border-black border-[1px] w-64 h-60">
          <h5>Today's Sales</h5>
          <p>&#8358;1652.50</p>
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
        <div className="rounded-lg bg-primary col-span-2">
          <h5>Today's Sales</h5>
          <p>&#8358;1652.50</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;