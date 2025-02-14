import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import ForBusiness from "./pages/ForBusiness";
import Media from "./pages/Media";
import Home from "./pages/Home"
import NavBar from "./pages/NavBar";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/forBusiness" element={<ForBusiness />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
