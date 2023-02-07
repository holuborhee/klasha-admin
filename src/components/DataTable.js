function DataTable({ title, className, data }) {
  return (
    <section className="rounded-lg border-[#F0F0F0] border-[1px] h-60">
      <h3 className="border-[#F0F0F0] border-b-[1px]">{title}</h3>
      <form className="border-[#F0F0F0] border-b-[1px] flex justify-between">
        <input type="text" value="" placeholder="Search" />
        <span>
          <button type="button">Filter</button>
          <button type="submit">Export</button>
        </span>
      </form>
      <table>
        <tr>
          {
            data?.head.map(item => <th>{item}</th>)
          }
        </tr>
        {
          data?.body.map(row =>
            <tr>
              {row.map(col => <td>{col}</td>)}
            </tr> 
          )
        }

      </table>
    </section>
  );
}

export default DataTable;