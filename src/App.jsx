import { CssBaseline } from "@mui/material";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";


const App = () => {


  return (
    <div> 
      <CssBaseline />
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
};

export default App;
