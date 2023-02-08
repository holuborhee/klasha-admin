import { NavLink } from "react-router-dom";

function NavGroup({ title, links }) {
  return (
    <nav className="mt-8">
      <h4 className="text-[#8D8D8D] text-xl">{title}</h4>
      <ul className="list-none">
      {
        links.map(link => (
          <li key={link.text} className="my-3">
            <NavLink to={link.url || link.text.toLowerCase()} className={({ isActive }) => isActive ? "text-primary flex items-center text-lg" : "flex items-center text-lg"}>
              <span className="mr-3">{link.icon}</span>
              {link.text}
            </NavLink>
          </li>
        ))
      }
      </ul>
    </nav>
  );
}

export default NavGroup;