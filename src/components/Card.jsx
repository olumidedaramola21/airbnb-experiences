import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className="card--image">
      <img src={props.img} alt="Card Image" className="card--image" />
      <div className="card--stats">
        <img src='/Star 1.png' alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">{props.reviewCount} . </span>
        <span className="gray">{props.country}</span>
      </div>
      <p >{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  reviewCount: PropTypes.string.isRequired,
};

