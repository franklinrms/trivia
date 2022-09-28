import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getGravatar from '../../lib/getGravatar';
import bg from '../../assets/bg.png';
import Container, { Button } from './style';

export default function Feedback() {
  const { assertions, score, gravatarEmail } = useSelector((state) => state.player);

  const MIN_ASSERTIONS = 3;
  const navigate = useNavigate();

  return (
    <Container minAssertions={assertions < MIN_ASSERTIONS} bg={bg}>
      <div>
        <img src={getGravatar(gravatarEmail)} alt="profile" />
        { assertions < MIN_ASSERTIONS ? <h2>Could be better...</h2> : <h2>Well Done!</h2> }

        <h3>{`You got ${assertions} questions right!`}</h3>
        <h3>{`Totaling ${score} points`}</h3>
        <span>
          <Button type="button" onClick={() => navigate('/')}>
            Play Again
          </Button>
          <Button type="button" onClick={() => navigate('/ranking')}>
            Ranking
          </Button>
        </span>
      </div>
    </Container>
  );
}
