import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/auth");
    }, 5000);
  }, [navigate]);

  
  return (
    <div className="h-screen center bg-main">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 bg-white rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm center">
          <img src="/logo.svg" alt="" width={40} />
        </div>
        <span className="text-2xl text-white font-bold">Boarde</span>
      </div>
    </div>
  );
};

export default SplashScreen;
