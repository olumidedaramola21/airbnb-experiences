import PropTypes from "prop-types";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="Card Image" className="card--image" />
      <div className="card--stats">
        <img src="/Star 1.png" alt="" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) . </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--prize">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    openSpots: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
