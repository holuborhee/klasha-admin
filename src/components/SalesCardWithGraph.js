import { CChart } from '@coreui/react-chartjs'

function SalesCardWithGraph({ text, fromDate, toDate, amount, dark=false }) {
  return (
    <div className={`${dark ? "bg-black text-white" : ''} rounded-lg border-black border-[1px] w-64 h-60 p-5`}>
      <p>24 Aug - 01 Sep 21</p>
      <CChart
        type="line" 
        data={{
          labels: ["", "", "", "", "", ""],
          datasets: [
            {
              label: "",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [1500, 2500, 1800, 3800, 2100, 4000]
            }
          ],
        }}
      />
      <h5>{text}</h5>
      <p className="text-xl font-medium mt-4">&#8358;{amount}</p>
    </div>
  );
}

export default SalesCardWithGraph;