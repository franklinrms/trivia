import React from 'react';
import PropTypes from 'prop-types';
import Container from './style';
import bg from '../../assets/bg.png';

export default function Question({ category, question }) {
  return (
    <Container bg={bg}>
      <h2>{category}</h2>
      <p>{question}</p>
    </Container>
  );
}
Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
};
Question.defaultProps = {
  category: '',
  question: '',
};
