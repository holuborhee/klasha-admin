function DataTableMobileCard({ transaction, columnTitles }) {
  return (
    <div className="md:hidden rounded-lg border-black border-[1px] p-2 my-1">
      <div className="grid grid-cols-2 gap-4">
        {
          columnTitles.map(title => (
            <p>
             <p className="font-semibold">{title}</p>
             <p>{transaction[title]}</p>
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default DataTableMobileCard;