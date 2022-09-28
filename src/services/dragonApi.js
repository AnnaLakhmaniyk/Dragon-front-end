import axios from 'axios';

const getDragon = async () => {
  const data = await axios.get(`/dragons`);
  return data.data;
};

const getDragonsById = async id => {
  const data = await axios.get(`/dragons/${id}`);
  return data;
};
export { getDragon, getDragonsById };
