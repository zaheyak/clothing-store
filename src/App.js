import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/login/LogIn";
import SignIn from "./pages/SignIn/SignIn";
import Shop from "./pages/shop/Shop";
import Home from "./pages/home/Home";
import BodyShape from "./pages/bodyShapes/BodyShape";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/BodyShape" element={<BodyShape />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
