import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRanking } from '../../lib/api';
import bg from '../../assets/bg.png';

import {
  Button, Container, ContainerRanking, List,
} from './style';

export default function Ranking() {
  const [ranking, setRanking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanking = async () => {
      const data = await getRanking();
      data.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0;
      });
      setRanking(data);
    };

    fetchRanking();
  }, []);

  return (
    <Container bg={bg}>
      <ContainerRanking>
        <h1>Ranking</h1>

        <List>
          {ranking.map((player) => (
            <span key={player.name + player.score}>
              <div>
                <img src={player.picture} alt={player.name} />
                <p>{player.name}</p>
              </div>
              <h2>
                <i className="bx bxs-medal" />
                {player.score}
                <p>points</p>
              </h2>
            </span>
          ))}
        </List>
        <Button type="button" onClick={() => navigate('/')}>
          Play again
        </Button>
      </ContainerRanking>
    </Container>
  );
}
