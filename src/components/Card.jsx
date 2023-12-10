import picture from "../images/picture1.png";
import star from "../images/star 1.png";

export default function Card() {
  return (
    <div className="card--image">
      <img src={picture} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
      </div>
      <p >Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}
