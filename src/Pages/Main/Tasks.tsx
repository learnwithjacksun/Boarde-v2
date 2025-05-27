import { ButtonLink } from "@/Components/UI";
import { MainLayout } from "@/Layouts";
import { formatDate } from "@/Utils/formatDate";
import {
  Check,
  CheckCheck,
  EllipsisVertical,
  ListFilter,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const filter = [
  {
    label: "All Tasks",
    value: "all",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

const Tasks = () => {
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [showFilter, setShowFilter] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Exercise",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed, updatedAt: new Date() }
        : task
    ));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setActiveDropdown(null);
  };

  return (
    <>
      <MainLayout
        title="Tasks List"
        description="Manage your tasks and reminders"
      >
        <main className="space-y-6">
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div
                  onClick={() => setShowFilter((prev) => !prev)}
                  className="bg-primary/10 cursor-pointer text-sm h-10 min-w-[120px] flex items-center gap-2 rounded-md px-2"
                >
                  <ListFilter size={18} />
                  <span className="text-xs font-semibold">
                    {selectedFilter.label}
                  </span>
                </div>

                {showFilter && (
                  <div className="absolute top-10 left-0 w-[180px] bg-background p-1 z-50 border border-line shadow-md rounded-md">
                    {filter.map((x, y) => (
                      <div
                        key={y}
                        onClick={() => {
                          setSelectedFilter(x);
                          setShowFilter(false);
                        }}
                        className="p-2 hover:bg-primary/10 capitalize cursor-pointer text-sm h-10  flex items-center gap-2 rounded-sm px-2"
                      >
                        {x.value}
                        {x.value === selectedFilter.value && (
                          <Check size={18} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <ButtonLink
                to="/tasks/create"
                className="btn-primary h-10 px-4 text-xs rounded-md"
              >
                <Plus size={18} className="text-tertiary" />
                New Task
              </ButtonLink>
            </div>
          </div>

          {/* tasks */}
          <div className="space-y-4 border-t border-line pt-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 border-b border-line pb-4 relative"
              >
                <div 
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="h-12 w-12 center bg-primary/10 rounded-full border border-primary/10 cursor-pointer hover:bg-primary/20 transition-colors"
                >
                  {task.completed && <CheckCheck size={20} />}
                </div>
                <div 
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="flex-1 cursor-pointer"
                >
                  <p className={`text-sm font-semibold ${task.completed ? 'line-through text-muted' : ''}`}>
                    {task.title}
                  </p>
                  <p className="text-xs text-muted">
                    {formatDate(task.updatedAt)}
                  </p>
                </div>
                <div className="relative">
                  <div 
                    onClick={() => setActiveDropdown(activeDropdown === task.id ? null : task.id)}
                    className="center p-2 cursor-pointer"
                  >
                    <EllipsisVertical size={20} />
                  </div>
                  
                  {activeDropdown === task.id && (
                    <div className="absolute right-0 top-full mt-1 w-[120px] bg-background border border-line shadow-md rounded-md z-10">
                      <button 
                        onClick={() => {
                          // TODO: Implement edit functionality
                          setActiveDropdown(null);
                        }}
                        className="w-full p-2 hover:bg-primary/10 flex items-center gap-2 text-sm"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteTask(task.id)}
                        className="w-full p-2 hover:bg-primary/10 flex items-center gap-2 text-sm text-red-500"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Tasks;
