import { navData } from "../data";

const Nav = () => {
  const { items } = navData;

  return (
    <nav>
      <ui className="flex gap-x-[58px] list-none">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="link hover:border-b-2 hover:border-dark transition duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ui>
    </nav>
  );
};

export default Nav;
