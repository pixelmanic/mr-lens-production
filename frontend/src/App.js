import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div className="App">
        <AllRoutes></AllRoutes>
      </div>
    )
  );
}

export default App;
