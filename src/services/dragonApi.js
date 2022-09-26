import axios from 'axios';

const getDragon = async page => {
  const data = await axios.get(`/dragons`);
  return data.data;
};
export { getDragon };
