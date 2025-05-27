import { MainLayout } from "@/Layouts";
import { useAuthStore, useItemsStore } from "@/Stores";
import { getGreeting } from "@/Utils/greeting";
import { Box, ChevronRight, Ellipsis, Trash2 } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
const Home = () => {
  const { name } = useAuthStore();
  const { items, deleteItem } = useItemsStore();



  

  if (!name) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      <MainLayout>
        <main className="space-y-6">
          <h1 className="text-4xl font-bold border-b border-line pb-6 my-4">
            {getGreeting()}, <br />{" "}
            <span className="text-primary font-light">{name}</span>
          </h1>

          <div>
            {items.length === 0 && (
              <div className="text-center center gap-4 flex-col text-muted">
                <div className="h-20 w-20 bg-yellow-600/10 rounded-lg text-yellow-600 center animate-pulse">
                  <Box size={32}/>
                </div>
                <p className="text-muted text-sm">No items found</p>
              </div>
            ) }
            <div className="space-y-6">
              {items.map((x, y) => (
                <div key={y} className="border-b border-line pb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold">{x.title}</h3>
                      <Ellipsis className="text-tertiary" />
                    </div>

                    <span
                      className={`text-xs capitalize rounded-full font-medium px-4 py-1 ${
                        x.category === "todo"
                          ? "bg-yellow-600/10 text-yellow-600"
                          : x.category === "budget"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}
                    >
                      {x.category}
                    </span>
                  </div>

                  <div className="text-[#dedede] dark:text-muted text-2xl font-bold">
                    There are <span className="text-primary">{0}</span>{" "}
                    items in {x.title}...
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => deleteItem(x)} className="h-12 w-12 center bg-red-500/10 rounded-full text-red-500 transition-colors duration-200">
                      <Trash2 size={18} />
                    </button>
                    <Link to={`/items/${x.id}`}>
                      <button className="h-12 w-12 center rounded-full bg-primary/10 hover:bg-primary hover:text-white dark:text-primary transition-colors duration-200">
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
