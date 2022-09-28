import React, { useEffect, useState } from 'react';
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
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  const prevScore = useSelector((state) => state.player.score);

  useEffect(() => {
    const arr = [...incorrectAnswers, correctAnswer];
    const shuffleArray = () => {
      for (let index = arr.length - 1; index > 0; index -= 1) {
        const random = Math.floor(Math.random() * (index + 1));
        [arr[index], arr[random]] = [arr[random], arr[index]];
      }
      setAnswers(arr);
    };
    shuffleArray();
  }, [correctAnswer]);

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
  isDisabled: PropTypes.bool,
  selected: PropTypes.func,
}.isRequired;
