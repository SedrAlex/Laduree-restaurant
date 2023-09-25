import{ BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home';
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/Menu/Menu";
import Restaurant from "./pages/Restaurant/Restaurant";
import Boutique from "./pages/Boutique/Boutique";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./pages/Orders/Orders";
import Delivery from "./pages/Delivery_Panel/Delivery";


function App() {
  return (
    <>
        <BrowserRouter>
        <ToastContainer />

           <Routes>
              <Route path="/"   element={<Home />} />
              <Route path="/signIn"  element={<SignIn />} />
              <Route path="/signUp"  element={<SignUp />} />
              <Route path="/cart"  element={<Cart />} />
              <Route path="/Menu"  element={<Menu />} />
              <Route path="/Restaurant" element={<Restaurant />} />
              <Route path="/Boitque" element={<Boutique />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/delivery" element={<Delivery />} />
            

          

           </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
