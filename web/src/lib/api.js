import axios from 'axios';

export const getToken = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: 'https://opentdb.com/api_token.php?command=request',
    });
    return data.token;
  } catch (error) {
    return error;
  }
};

export const getQuestions = async (token, difficulty) => {
  const urlWithDifficulty = `https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&token=${token}`;
  try {
    const { data } = await axios({
      method: 'get',
      url: difficulty ? urlWithDifficulty : `https://opentdb.com/api.php?amount=5&token=${token}`,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const postRanking = async (player) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: process.env.REACT_APP_NODE_SERVER_URL,
      data: player,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getRanking = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: process.env.REACT_APP_NODE_SERVER_URL,
    });
    return data;
  } catch (error) {
    return error;
  }
};
