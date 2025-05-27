import { menuItems } from "@/Constants/data";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-50">
      <div className=" inline-flex items-center justify-center md:gap-10 gap-2 bg-primary  rounded-full max-[351px]:rounded-xl p-3 shadow-2xl shadow-tertiary/30">
        {menuItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "bg-tertiary/10 text-white transition-background rounded-full p-2 md:px-6 px-4"
                : "hover:bg-tertiary/10 text-white transition-background rounded-full p-2 md:px-6 px-4 max-[351px]:px-6"
            }
          >
            <div className="flex flex-row max-[351px]:flex-col items-center justify-center gap-2">
              <item.icon size={20} className="text-tertiary" />
              <span className="text-xs font-semibold">{item.label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuBar