import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ScrollToTop } from '@/Components/UI'
import SplashScreen from '@/Pages/SplashScreen'
import { Auth } from '@/Pages/Auth'
import { Home, Tasks } from '@/Pages/Main'

const App = () => {
  return (
    <>
    <Toaster />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App