import "./styles.scss";
import logo from "../../images/logo.svg";
export const Header = () => {
  return (
    <header>
      <div className="headerTags">
        <img href="/" src={logo} className="logoTitle" alt="logo"></img>
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Prices</a>
          </li>
          <li>
            <a href="/"> Resources</a>
          </li>
        </ul>
      </div>
      <div className="authButtons">
        <button className="loginButton">Login</button>
        <button className="signInButton"> Sign In</button>
      </div>
    </header>
  );
};
