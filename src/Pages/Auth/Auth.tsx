import { ThemeToggle } from "@/Components/UI"
import { HelpCircle } from "lucide-react"

const Auth = () => {
  return (
    <>
    <div className="fixed top-10 right-10">
        <ThemeToggle />
    </div>
    <div className="max-h-screen mt-[20vh]">
        <div className="w-[90%] md:w-[480px] mx-auto space-y-4">
            <div className="min-w-full md:min-w-[480px] space-y-4">
                <img src="/logo.svg" alt="" width={40} />
                <h1 className="capitalize text-xl font-semibold">What's your name?</h1>

                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="input w-full" />
                    <button className="btn-primary w-full h-10 rounded-md">Continue</button>
                </form>
            </div>

            <p className="text-center text-sm text-muted flex items-center"><HelpCircle className="w-4 h-4 mr-2 text-yellow-600"/> Your data is stored <span className="text-yellow-600 font-bold mx-1">locally</span>and not shared with anyone.</p>
        </div>
    </div>
    </>
  )
}

export default Auth