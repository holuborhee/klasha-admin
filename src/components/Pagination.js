import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <ul className="border-[#F0F0F0] rounded-lg border-[1px] flex w-1/3 justify-between items-center m-4 p-2 text-[#A39D9E]">
      <li>
        <button className="disabled:text-gray-800" disabled={currentPage<2} onClick={() => onPageChange(currentPage-1)}><FaChevronLeft /></button>
      </li>
      {
        [...Array(totalPages).keys() ].map( i => i+1).map(item => (
          <li className={`${currentPage===item ? 'rounded-full bg-[#F0F0F0] text-[#0A0A0A] font-semibold' : ''} w-6 flex justify-center`}>
            <button onClick={() => onPageChange(item)}>{item}</button>
          </li>
        ))
      }
      <li>
        <button disabled={currentPage===totalPages} onClick={() => onPageChange(currentPage+1)}><FaChevronRight /></button>
      </li>
    </ul>
  );
}

export default Pagination;