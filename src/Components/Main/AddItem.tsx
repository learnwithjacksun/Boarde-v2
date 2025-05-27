import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemSchema } from "@/Schemas/addItemSchema";
import { useItemsStore } from "@/Stores";

type AddItemForm = z.infer<typeof addItemSchema>;

const AddItem = ({ onClose }: { onClose: () => void }) => {
  const { addItem } = useItemsStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddItemForm>({
    resolver: zodResolver(addItemSchema),
  });

  const onSubmit = (data: AddItemForm) => {
    addItem({
      id: crypto.randomUUID(),
      title: data.title,
      category: data.category,
    });
    onClose();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter Title"
          className="input w-full"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm font-medium">
            {errors.title.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <div className="relative">
          <select
            id="category"
            className="input w-full appearance-none"
            {...register("category")}
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="todo">Todo</option>
            <option value="budget">Budget</option>
            <option value="image">Image</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
          />
        </div>
        {errors.category && (
          <p className="text-red-500 text-sm font-medium">
            {errors.category.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn-primary w-full h-10 rounded-md text-sm"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
