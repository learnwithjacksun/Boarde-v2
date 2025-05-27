import { ThemeToggle } from "@/Components/UI"
import { HelpCircle } from "lucide-react"

const Auth = () => {
  return (
    <>
    <div className="fixed top-4 right-4 md:top-10 md:right-10">
        <ThemeToggle />
    </div>
    <div className="max-h-screen mt-[20vh]">
        <div className="w-[90%] md:w-[480px] mx-auto space-y-4">
            <div className="min-w-full md:min-w-[480px] space-y-4">
                <img src="/logo.svg" alt="" width={40} />
                <h1 className="capitalize text-4xl font-semibold">What's your name?</h1>

                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="input w-full" />
                    <button className="btn-primary w-full h-10 rounded-md text-sm">Continue</button>
                </form>
            </div>

            <div className="flex items-center justify-center gap-2">
                <HelpCircle size={18} className="text-yellow-600" />
                <p className="text-center text-sm text-muted"> Your data is stored <span className="text-yellow-600 font-medium">locally</span> and not shared with anyone.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth