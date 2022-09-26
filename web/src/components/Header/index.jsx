import React from 'react';
import { useSelector } from 'react-redux';
import getGravatar from '../../lib/getGravatar';
import Container from './style';
import bg from '../../assets/bg.png';

export default function Header() {
  const { gravatarEmail, name, score } = useSelector((state) => state.player);
  return (
    <Container bg={bg}>
      <span>
        <img src={getGravatar(gravatarEmail)} alt="profile" />
        <p>{name}</p>
      </span>
      <p>
        {`${score} points`}
      </p>
    </Container>
  );
}
