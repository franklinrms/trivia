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

export const get = async () => {};
