import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="b mx-auto mr-[15px] flex h-20  items-center justify-between gap-5">
        <Link to="/home">
          <div className="ml-5 flex justify-center lg:ml-[50px]">
            <h1 className="cursor-pointer text-xl font-bold uppercase tracking-wide text-indigo-600 sm:text-2xl md:text-3xl">
              React redux shopping cart
            </h1>
          </div>
        </Link>
        <ul className="text-grey-800 flex list-none items-center gap-4 font-semibold">
          <NavLink
            className="cursor-pointer text-xl font-bold hover:text-indigo-500 aria-[current=page]:text-indigo-400"
            to="/home"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className="cursor-pointer text-xl font-bold hover:text-indigo-500 aria-[current=page]:text-indigo-400"
            to="/cart "
          >
            <li>Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
