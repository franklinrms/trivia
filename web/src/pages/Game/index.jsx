import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alternatives from '../../components/Alternatives';
import Header from '../../components/Header';
import Question from '../../components/Question';
import { requestQuestions } from '../../reduce/actions';

export default function Game() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestQuestions(navigate));
  }, []);

  const questions = useSelector((state) => state.game) || [];
  const currentQuestion = questions[indexQuestion];

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
  };

  return (
    <div>
      <Header />

      <Question
        category={currentQuestion?.category}
        question={currentQuestion?.question}
      />
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Alternatives {...currentQuestion} isDisabled={false} />
      }

      <button type="button" onClick={nextQuestion}>next</button>
    </div>
  );
}
