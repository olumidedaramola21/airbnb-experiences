import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className="card--image">
      <img src={props.img} alt="Card Image" className="card--image" />
      <div className="card--stats">
        <img src='/Star 1.png' alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
      </div>
      <p >Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
};
