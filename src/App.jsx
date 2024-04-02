import { CssBaseline } from "@mui/material";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Resources from "./components/resources";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

export default App;
