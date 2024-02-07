import { nav } from "../data";

const MobileNav = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-accent/95">
      <ul>
        {nav.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx} className="text-center text-white text-xl">
              <a className="inline-block p-2" href={href}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
