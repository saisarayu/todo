import PropTypes from 'prop-types';
import style from './Card.module.css';

function Card({ title , description  }) {
    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Card;