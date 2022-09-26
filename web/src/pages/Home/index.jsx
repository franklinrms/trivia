import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../lib/api';
import { setPlayerValues } from '../../reduce/actions';
// import art from '../../assets/art.png';
import {
  Buttons, Container, Form, PlayButton,
} from './style';
import bg from '../../assets/bg.png';

export default function Home() {
  const [player, setPlayer] = useState({
    name: '', score: 0, assertions: 0, gravatarEmail: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      sessionStorage.setItem('TOKEN_TRIVIA', token);
    };
    fetchToken();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setPlayer({ ...player, [name]: value });
  };

  const onSubmitButton = () => {
    const { name, gravatarEmail } = player;
    if (name && gravatarEmail) {
      dispatch(setPlayerValues(player));
    }
    navigate('/game');
  };

  return (
    <Container bg={bg}>
      {/* <img src={art} alt="art" /> */}
      <Form onSubmit={(event) => {
        event.preventDefault();
        onSubmitButton();
      }}
      >
        <h1>Trivia</h1>

        <input
          placeholder="Type your e-mail"
          type="text"
          name="gravatarEmail"
          onChange={handleChange}
        />

        <input
          placeholder="Type your name"
          type="text"
          name="name"
          onChange={handleChange}
        />

        <PlayButton type="submit">Play</PlayButton>
        <span>
          <Buttons type="button" onClick={() => navigate('/settings')}>
            <i className="bx bx-cog bx-tada-hover" />
            Settings
          </Buttons>
          <Buttons type="button" onClick={() => navigate('/ranking')}>
            <i className="bx bx-trophy bx-tada-hover" />
            Ranking
          </Buttons>
        </span>
      </Form>
    </Container>
  );
}
