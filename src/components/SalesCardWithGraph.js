function SalesCardWithGraph({ text, fromDate, toDate, amount, dark=false }) {
  return (
    <div className={`${dark ? "bg-black text-white" : ''} rounded-lg border-black border-[1px] w-64 h-60`}>
      <p>24 Aug - 01 Sep 21</p>
      <h5>{text}</h5>
      <p>&#8358;{amount}</p>
    </div>
  );
}

export default SalesCardWithGraph;