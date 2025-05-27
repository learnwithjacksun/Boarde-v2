import { menuItems } from "@/Constants/data";
import { AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Modal } from "../UI";
import AddItem from "./AddItem";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname.includes("/home");

  return (
    <>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4">
        <div className="inline-flex items-center justify-center relative gap-20 z-0 bg-primary dark:bg-secondary rounded-full max-[351px]:rounded-xl p-3 shadow-2xl shadow-tertiary/20">
          {isHome && (
            <button
              onClick={() => setIsOpen(true)}
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 z-[100] bg-tertiary  text-primary dark:text-[#03301D] transition-background rounded-full h-16 w-16 border-4 border-primary dark:border-secondary center"
            >
              <Plus size={30} />
            </button>
          )}
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "bg-tertiary/10 dark:bg-foreground text-white  transition-background rounded-full max-[351px]:rounded-md p-2 md:px-6 px-4"
                  : "hover:bg-tertiary/10 hover:dark:bg-foreground group  text-white transition-background rounded-full max-[351px]:rounded-md p-2 md:px-6 px-4 max-[351px]:px-6"
              }
            >
              <div className="flex flex-row max-[351px]:flex-col items-center justify-center gap-2">
                <item.icon
                  size={20}
                  className={`${
                    location.pathname === item.href
                      ? "text-tertiary"
                      : "text-muted"
                  } group-hover:text-tertiary`}
                />
                <span className="text-xs font-semibold">{item.label}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Modal
            title="Add Item"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <AddItem onClose={() => setIsOpen(false)} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBar;
