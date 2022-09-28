import axios from 'axios';
import PropTypes from 'prop-types';

const getDragon = async () => {
  const data = await axios.get(`/dragons`);
  return data.data;
};

const getDragonsById = async id => {
  const data = await axios.get(`/dragons/${id}`);
  return data;
};
getDragonsById.PropTypes = {
  id: PropTypes.number,
};
export { getDragon, getDragonsById };
