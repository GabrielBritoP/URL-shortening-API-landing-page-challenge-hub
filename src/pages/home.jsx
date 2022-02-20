import { Header } from "../components/header";
import { Input } from "../components/input";
import illustration_working from "../images/illustration-working.svg";
import "../styles/homestyles.scss";
export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section id="initial-section">
        <div className="initial-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <img src={illustration_working} alt={illustration_working} />
      </section>
      <Input></Input>
      <section id="mid-section">
        <div className="links-div">
          <div className="link">
            <span>link</span>
            <div className="short-link-div"> 
              <span>link</span>
              <button>Copy</button>
            </div>
          </div>
          <div className="link">
            <span>link</span>
            <div className="short-link-div"> 
              <span>link</span>
              <button>Copy</button>
            </div>
          </div>
          <div className="link">
            <span>link</span>
            <div className="short-link-div"> 
              <span>link</span>
              <button>Copy</button>
            </div>
          </div>
        </div>
        <div className="statistics-div">
          <h2> Advanced Statistics</h2>
          <p> Track how your links  are performing across the web with our advanced statistics dashboard</p>
        </div>
      </section>
    </div>
  );
};
