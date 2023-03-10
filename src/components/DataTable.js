import React, { useState } from 'react';
import Pagination from './Pagination';
import DataTableMobileCard from './DataTableMobileCard';
import { FaSortDown } from "react-icons/fa";

function DataTable({ title, className, data }) {
  const [page, setPage] = useState(1);

  const LIMIT = 6;
  return (
    <section className="rounded-lg border-[#F0F0F0] border-[1px]">
      <h3 className="border-[#F0F0F0] border-b-[1px] text-lg p-3 font-medium">{title}</h3>
      <form className="border-[#F0F0F0] border-b-[1px] flex flex-col md:flex-row md:justify-between p-3 items-center">
        <input type="text" className="border-[#F0F0F0] rounded border-[1px] p-1 w-full md:w-auto" value="" placeholder="Search" />
        <div className="flex md:w-1/5 w-full justify-between">
          <button type="button" className="border-black text-black rounded-lg border-[1px] px-4 py-1 flex">
           Filter
           <FaSortDown className="inline" />
          </button>
          <button type="submit" className="border-black text-black rounded-lg border-[1px] px-4 py-1">Export</button>
        </div>
      </form>
      <table className="hidden md:table w-full mt-10">
        <tr className="text-left">
          {
            data?.head.map(item => <th className="py-6 px-3">{item}</th>)
          }
        </tr>
        {
          data?.body.slice((LIMIT*page) - LIMIT, LIMIT*page).map(row =>
            <tr className={`${row['Status'] === "Successful" ? 'bg-[#F7F7F7]' : '' } border-[#F0F0F0] border-b-[1px]`}>
              {data?.head.map(h => <td className="py-6 px-3">{row[h]}</td>)}
            </tr>
          )
        }
      </table>
      {data?.body.slice((LIMIT*page) - LIMIT, LIMIT*page).map(transaction => <DataTableMobileCard columnTitles={data.head} transaction={transaction} />)}
      <div className="flex w-full md:justify-end">
        <Pagination totalPages={Math.ceil(data.body.length / LIMIT)} currentPage={page} onPageChange={setPage} />
      </div>
    </section>
  );
}

export default DataTable;