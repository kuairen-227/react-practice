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
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          end
          className={({ isActive }) => cn(isActive && "bg-gray-900 text-white")}
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
