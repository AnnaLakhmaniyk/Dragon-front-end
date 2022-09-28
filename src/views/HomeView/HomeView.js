import { useEffect, useState } from 'react';
import { getDragon } from '../../services/dragonApi';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import Loader from '../../components/Loader/Loder';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import s from './HomeView.module.css';

export const HomeView = () => {
  const [dragon, setDragon] = useState([]);
  const [status, setStatus] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setStatus(true);
    getDragon()
      .then(data => {
        setDragon(data);
        setStatus(false);
      })
      .catch(error => {
        console.log(error);
        setStatus(false);
      });
  }, []);

  return (
    <Container>
      {status && <Loader />}
      <div className={s.wrap}>
        <ul>
          {dragon.map(({ _id, name }) => (
            <li key={_id} className={s.item}>
              <Link
                to={`/home/${_id}`}
                state={{ from: location }}
                className={s.name}
              >
                {name}
                <RocketLaunchIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default HomeView;
