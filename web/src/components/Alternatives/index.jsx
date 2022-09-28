import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AlternativeButton from '../AlternativeButton';
import Container from './style';
import calcScore from '../../lib/calcScore';
import { setScoreValue } from '../../reduce/actions';

export default function Alternatives({
  incorrect_answers: incorrectAnswers,
  correct_answer: correctAnswer,
  isDisabled,
  difficulty,
  selected,
}) {
  const dispatch = useDispatch();
  const prevScore = useSelector((state) => state.player.score);

  const answers = [...incorrectAnswers, correctAnswer];

  const selectAlternative = ({ target }) => {
    if (target.value === correctAnswer) {
      dispatch(setScoreValue(calcScore(difficulty, prevScore)));
    }
    selected();
  };

  return (
    <Container>
      {
        answers.map((answer) => (
          <AlternativeButton
            key={answer}
            label={answer}
            disabled={isDisabled}
            isCorrect={answer === correctAnswer}
            onClick={selectAlternative}
          />
        ))
      }
    </Container>
  );
}
Alternatives.propTypes = {
  incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  correct_answer: PropTypes.string,
  difficulty: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  selected: PropTypes.func.isRequired,
};
Alternatives.defaultProps = {
  incorrect_answers: [],
  correct_answer: '',
  difficulty: '',
};
