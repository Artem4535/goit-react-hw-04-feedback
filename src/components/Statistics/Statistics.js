import React from 'react';
import css from './Statiscs.module.css';
import PropTypes from 'prop-types';

function Statiscs({
  goodValue,
  netrualValue,
  badValue,
  total,
  positiveFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>
        <p>Good: {goodValue}</p>
      </li>
      <li>
        <p>Netrual: {netrualValue}</p>
      </li>
      <li>
        <p>Bad: {badValue}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positiveFeedback}%</p>
      </li>
    </ul>
  );
}

export { Statiscs };

Statiscs.propTypes = {
  goodValue: PropTypes.number.isRequired,
  netrualValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
