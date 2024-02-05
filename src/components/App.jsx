import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./auth/welcomePage.jsx";
import { Login } from "./auth/login";
import { Register } from "./auth/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login></Login>} />
        <Route path="/auth/register" element={<Register></Register>} />
        <Route path="/auth/home" element={<div>home</div>} />
        <Route path="*" element={<WelcomePage></WelcomePage>} />
      </Routes>
    </>
  );
}

export default App;
