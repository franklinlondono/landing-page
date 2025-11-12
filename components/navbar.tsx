import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="fixed z-20 left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2
        px-2 py-4 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-r-full">
      {itemsNavbar.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150"
        >
          <Link href={item.link}>{item.icon}</Link>
        </div>
      ))}
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
