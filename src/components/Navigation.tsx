import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";

type SideNavigationItem = {
  name: string;
  to: string;
};

const navigation = [
  { name: "ホーム", to: "/" },
  { name: "プロジェクト", to: "/projects" },
  { name: "タスク", to: "/tasks" },
].filter(Boolean) as SideNavigationItem[];

export const Navigation = () => {
  return (
    <nav className="w-64 bg-gray-800 h-screen fixed left-0 top-16 p-4 overflow-auto">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          end
          className={({ isActive }) =>
            cn(
              "block px-4 py-2 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white",
              isActive && "bg-gray-500 text-white"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
