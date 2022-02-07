import { Header } from "../components/header";
import { Input } from "../components/input";
import illustration_working from "../images/illustration-working.svg";
import "../styles/homestyles.scss";
export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <section>
          <div className="section-title">
            <h1>
              More than just <span>short links</span>
            </h1>
            <p>
              Build your brand's recognition and get detailed{" "}
              <span>insights on how your links are performing.</span>
            </p>
            <button> Get started</button>
          </div>

          <img src={illustration_working} alt={illustration_working} />
        </section>
        <Input/>
        <section className="section-links">
          <p>link</p>
          <p>link</p>
          <button>Copy</button>
          <p>link</p>
          <p>link</p>
          <button>Copy</button>
          <p>link</p>
          <p>link</p>
          <button>Copy</button> 
        </section>
      </div>
    </>
  );
};
