import { ThemeToggle } from "@/Components/UI";
import { HelpCircle, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/Stores";
import { useState } from "react";


const authSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
});

type AuthSchema = z.infer<typeof authSchema>;

const Auth = () => {
  const { setName } = useAuthStore();
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthSchema) => {
    setLoading(true);
    setName(data.name);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1000);
  };
  return (
    <>
      <div className="fixed top-4 right-6 md:top-10 md:right-10">
        <ThemeToggle />
      </div>
      <div className="max-h-screen mt-[20vh]">
        <div className="w-[90%] md:w-[480px] mx-auto space-y-4">
          <div className="min-w-full md:min-w-[480px] space-y-4">
            <img src="/logo.svg" alt="" width={40} />
            <h1 className="capitalize text-4xl font-semibold">
              What's your name?
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input w-full"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 font-medium text-sm">{errors.name.message}</p>
                )}
              </div>
              <button disabled={loading} className="btn-primary w-full h-10 rounded-md text-sm">
                {loading ? <Loader className="animate-spin" /> : "Continue"}
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center gap-2">
            <HelpCircle size={18} className="text-yellow-600 flex-shrink-0" />
            <p className="text-sm text-muted">
              {" "}
              Your data is stored{" "}
              <span className="text-yellow-600 font-medium">locally</span> and
              not shared with anyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
