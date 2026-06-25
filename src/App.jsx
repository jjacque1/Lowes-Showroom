import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import MyLowes from "./pages/MyLowes";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mylowes" element={<MyLowes />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
