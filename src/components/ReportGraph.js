function ReportGraph({ data, className }) {
  return (
    <div className={`${className} rounded-lg border-black border-[1px] h-60`}>
      <p>24 Aug - 01 Sep 21</p>
      <h5>{data}</h5>
      <p>&#8358;</p>
    </div>
  );
}

export default ReportGraph;