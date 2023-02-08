import { CChart } from '@coreui/react-chartjs'

function ReportGraph({ data, className }) {
  return (
    <div className={`${className} rounded-lg border-black border-[1px]`}>
      <CChart
        type="line" 
        data={{
          labels: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [1500, 2500, 1800, 3800, 2100, 4000]
            }
          ],
        }}
      />
    </div>
  );
}

export default ReportGraph;