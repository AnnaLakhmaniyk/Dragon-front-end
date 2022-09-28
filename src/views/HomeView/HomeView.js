import { useEffect, useState } from 'react';
import { getDragon } from '../../services/dragonApi';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import s from './HomeView.module.css';
export const DragonView = () => {
  const [dragon, setDragon] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getDragon()
      .then(data => {
        setDragon(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Container>
      <div className={s.wrap}>
        <p>jdvbfsedfhjbvdjhfkgnbjkdfgnbkjdfnbjkdnfjkbn</p>
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

export default DragonView;
