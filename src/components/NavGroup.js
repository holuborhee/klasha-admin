import { Link } from "react-router-dom";

function NavGroup({ title, links }) {
  return (
    <nav>
      <h4>{title}</h4>
      {
        links.map(link => (
          <li key={link.text}>
            <Link to={link.url || link.text.toLowerCase()}>
              <span>★</span>
              {link.text}
            </Link>
          </li>
        ))
      }
    </nav>
  );
}

export default NavGroup;