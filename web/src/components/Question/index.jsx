/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import Container from './style';
import bg from '../../assets/bg.png';

export default function Question({ category, question }) {
  const cleanQuestion = sanitizeHtml(question);
  const cleanCategory = sanitizeHtml(category);

  return (
    <Container bg={bg}>
      <h2 dangerouslySetInnerHTML={{ __html: cleanCategory }} />
      <p dangerouslySetInnerHTML={{ __html: cleanQuestion }} />
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
