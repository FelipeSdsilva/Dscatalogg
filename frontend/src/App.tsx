import NavBar from "components/NavBart";
import DashBoard from "pages/DashBoard";
import Login from "pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard">
          <Route path=":movieId" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
