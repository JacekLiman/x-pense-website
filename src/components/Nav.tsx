import { nav } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="inline-block p-2 hover:text-accent " href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
