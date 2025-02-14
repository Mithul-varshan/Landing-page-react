import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import "../styles/signin.css"
function SignIn() {
  const {username, handleChangeUsername, toggleLoggedIn} = useStore();
  const navigate = useNavigate();
  function Submit() {
    if (username != "") {
      navigate("/home");
      toggleLoggedIn();
    }
  }

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      {/* <h2>USERNAME</h2> */}
      <input onChange={handleChangeUsername} className="username-input" placeholder="Username"></input>
      {/* <h2 className="signup-h2">PASSWORD</h2> */}
      <input className="password-input" placeholder="Password"></input>
      <button onClick={Submit} className="login-btn">Login</button>
    </div>
  );
}

export default SignIn;
