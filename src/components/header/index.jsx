import "./styles.scss";
import logo from "../../images/logo.svg";
export const Header = () => {
  return (
    <header>
      <div className="headerTags">
        <img href="/" src={logo} className="logoTitle" alt="logo"></img>
        <a href="/">Features</a>
        <a href="/">Prices</a>
        <a href="/"> Resources</a>
      </div>
      <div className="authButtons">
        <button className="loginButton">Login</button>
        <button className="signInButton"> Sign In</button>
      </div>
    </header>
  );
};
