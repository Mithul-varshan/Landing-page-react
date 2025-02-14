import "../styles/nav.css";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
function Navigate() {
  const navigate = useNavigate();
  const { isLoggedIn, username } = useStore();

  return (
    <>
      <nav className="glass-navbar">
        <div className="nav-icon">
          <img src="/landing icon.svg" alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/forbusiness")}>For Business</li>
            <li onClick={() => navigate("/media")}>Media</li>
            {!isLoggedIn && <li onClick={() => navigate("/signin")}>SignIn</li>}
            {isLoggedIn && <li>{username}</li>}
          </ul>
        </div>
      </nav>

      
    </>
  );
}

export default Navigate;
