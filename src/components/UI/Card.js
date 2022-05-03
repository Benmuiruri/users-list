/*eslint-disable */
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, className }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

// Card.propTypes = {
//   children: PropTypes.element.isRequired,
//   className: PropTypes.string.isRequired,
// };
export default Card;
