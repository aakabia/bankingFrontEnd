import { Route, Routes } from "react-router";
import "./styles/globals.css";
import { Home } from "./pages/user/Home";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />


      <Route path="auth">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login/>} />
      </Route>

      {/* to do: restrict route if jwt not present */}
      <Route path="user">
        <Route path="home" element={<Home />} />
      </Route>


    </Routes>
  );
}

export default App;
