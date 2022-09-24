import axios from 'axios';
axios.defaults.baseURL = 'https://tests-space.herokuapp.com';
const getDragon = async page => {
  const data = await axios.get(`/api/dragons`);
  return data.data;
};
export { getDragon };
