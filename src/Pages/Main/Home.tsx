import { MainLayout } from "@/Layouts";
import { getGreeting } from "@/Utils/greeting";
import { ChevronRight, Ellipsis, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  const totalNotes = 0;
  const totalTasks = 0;
  const totalShoppingList = 0;

  const stats = [
    {
      id: 1,
      label: "Tasks",
      value: totalTasks,
      link: "/tasks",
      type: "todo",
    },
    {
      id: 2,
      label: "Shopping List",
      value: totalShoppingList,
      type: "list",
      link: "/shopping-list",
    },
    {
      id: 3,
      label: "Images",
      value: totalNotes,
      type: "image",
      link: "/images",
    },
  ];
  return (
    <>
      <MainLayout>
        <main className="space-y-6">
          <h1 className="text-4xl font-bold border-b border-[#e0e0e0] pb-6">
            {getGreeting()}, <br />{" "}
            <span className="text-primary font-light">John Doe</span>
          </h1>
          <div>
            <div className="space-y-6">
              {stats.map((x, y) => (
                <div
                  key={y}
                  className="border-b border-[#e0e0e0] pb-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold">{x.label}</h3>
                      <Ellipsis className="text-tertiary" />
                    </div>

                    <span
                      className={`text-xs capitalize rounded-full px-4 py-1 ${
                        x.type === "todo"
                          ? "bg-yellow-600/10 text-yellow-600"
                          : x.type === "list"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-green-500/10 text-green-500"
                      }`}
                    >
                      {x.type}
                    </span>
                  </div>

                  <div className="text-[#dedede] dark:text-primary/30 text-2xl font-bold">
                    There are <span className="text-primary">{x.value}</span>{" "}
                    {x.label}...
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="h-12 w-12 center bg-red-500/10 rounded-full hover:bg-primary text-red-500 hover:text-white transition-colors duration-200">
                      <Trash2 size={18} />
                    </button>
                    <Link to={`/items/${x.id}`}>
                      <button className="h-12 w-12 center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors duration-200">
                        <ChevronRight />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
