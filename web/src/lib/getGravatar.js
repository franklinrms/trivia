import md5 from 'crypto-js/md5';

const getGravatar = (email) => {
  const string = md5(email).toString();
  return `https://www.gravatar.com/avatar/${string}`;
};
export default getGravatar;
