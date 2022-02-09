import "./styles.scss";
export const Input = () => {
  return (
    <div className="container">
    <div className="input-div">
      <input placeholder="shorten a link here..." />
      <button>Shorten it!</button>
    </div>
    </div>
  );
};
