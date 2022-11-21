import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MyItems from "./Components/MyItems/MyItems";
import ProtectedRoute from "./Components/ProtectedRoute";
import SingleInventory from "./Components/SingleInventory/SingleInventory";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <ProtectedRoute>
              <SingleInventory></SingleInventory>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/myItems"
          element={
            <ProtectedRoute>
              <MyItems></MyItems>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
