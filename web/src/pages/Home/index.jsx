import React, { useEffect, useState } from 'react';
import { getToken } from '../../lib/api';

export default function Home() {
  const [player, setPlayer] = useState({
    name: '', score: 0, assertions: 0, gravatarEmail: '',
  });

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

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}
