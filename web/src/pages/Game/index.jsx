/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alternatives from '../../components/Alternatives';
import Header from '../../components/Header';
import Question from '../../components/Question';
import Timer from '../../components/Timer';
import { postRanking } from '../../lib/api';
import getGravatar from '../../lib/getGravatar';
import { requestQuestions } from '../../reduce/actions';
import NextButton from './style';

export default function Game() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [hasClick, setHasClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestQuestions(navigate));
  }, []);

  const { score, gravatarEmail, name } = useSelector((state) => state.player);
  const questions = useSelector((state) => state.game) || [];
  const currentQuestion = questions[indexQuestion];

  const updateRating = async () => {
    const picture = getGravatar(gravatarEmail);
    await postRanking({ score, picture, name });
  };

  const nextQuestion = async () => {
    const MAX_QUESTIONS = 3;
    if (indexQuestion <= MAX_QUESTIONS) {
      setIndexQuestion(indexQuestion + 1);
    } else {
      await updateRating();
      navigate('/feedback');
    }
    setHasClick(false);
  };

  return (
    <div>
      <Header />
      { currentQuestion && (
        <>
          <Question
            category={currentQuestion?.category}
            question={currentQuestion?.question}
          />

          <Alternatives
            {...currentQuestion}
            isDisabled={hasClick}
            selected={() => setHasClick(true)}
          />

          {hasClick ? (

            <NextButton type="button" onClick={nextQuestion}>next</NextButton>

          ) : (

            <Timer timeout={() => setHasClick(true)} />

          )}
        </>
      )}
    </div>
  );
}
