import { MainLayout } from "@/Layouts";
import { formatDate } from "@/Utils/formatDate";
import { getGreeting } from "@/Utils/greeting";
import { ChevronRight, Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  const totalNotes = 0;
  const totalTasks = 0;
  const totalShoppingList = 0;

  const stats = [
    {
      label: "Tasks",
      value: totalTasks,
      updatedAt: new Date(),
      link: "/tasks",
    },
    {
      label: "Shopping List",
      value: totalShoppingList,
      updatedAt: new Date(),
      link: "/shopping-list",
    },
    {
      label: "Notes",
      value: totalNotes,
      updatedAt: new Date(),
      link: "/notes",
    },
    
  ];
  return (
    <>
      <MainLayout>
        <main className="space-y-6">
          <h1 className="text-4xl font-bold">
            {getGreeting()}, <br />{" "}
            <span className="text-primary font-light">John Doe</span>
          </h1>
          <div>
            <div className="space-y-6">
              {stats.map((x, y) => (
                <div key={y} className="border-b border-line pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold">{x.label}</h3>
                      <Ellipsis className="text-tertiary" />
                    </div>
                    <Link
                      to={x.link}
                      >
                      <button className="p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
                        <ChevronRight />
                      </button>
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[#dedede] dark:text-primary/30 text-3xl font-bold">
                      You have <span className="text-primary">{x.value}</span> {x.label}...
                    </div>
                    <p className="text-muted text-xs dark:text-primary/30">
                      {formatDate(x.updatedAt)}
                    </p>
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
