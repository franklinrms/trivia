import React from 'react';
import PropTypes from 'prop-types';
import AlternativeButton from '../AlternativeButton';
import Container from './style';

export default function Alternatives({
  incorrect_answers: incorrectAnswers,
  correct_answer: correctAnswer,
  isDisabled,
}) {
  const answers = [...incorrectAnswers, correctAnswer];

  return (
    <Container>
      {
        answers.map((answer) => (
          <AlternativeButton
            key={answer}
            label={answer}
            disabled={isDisabled}
            isCorrect={answer === correctAnswer}
            onClick={() => {}}
          />
        ))
      }
    </Container>
  );
}
Alternatives.propTypes = {
  incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  correct_answer: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
};
Alternatives.defaultProps = {
  incorrect_answers: [],
  correct_answer: '',
};
