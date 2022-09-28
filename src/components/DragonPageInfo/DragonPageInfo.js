import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ImageSwiper } from '../ImageSwiper/ImageSwiper';
import { Container } from '../Container/Container';
import BtnOpenModal from '../BtnOpenModal/BtnOpenModal';
import Loader from 'components/Loader/Loder';
import { getDragonsById } from '../../services/dragonApi';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import s from './DragonPageInfo.module.css';

const DragonPageInfo = () => {
  const location = useLocation();
  const { dragonId } = useParams();
  const [dragon, setDragon] = useState({});
  const [images, setImages] = useState([]);
  const [size, setSize] = useState(Number);
  const [status, setStatus] = useState(false);
  const backHome = location?.state?.from || '/';
  useEffect(() => {
    setStatus(true);
    getDragonsById(dragonId)
      .then(data => {
        setDragon(data.data);
        setImages(data.data.flickr_images);
        setSize(data.data.heat_shield.size_meters);
        setStatus(false);
      })
      .catch(error => {
        console.log(error);
        setStatus(false);
      });
  }, [dragonId]);
  return (
    <Container>
      {status && <Loader />}
      <div className={s.container}>
        <Link to={backHome}>
          <button type="button" className={s.button}>
            <KeyboardDoubleArrowLeftIcon
              sx={{ fontSize: 35 }}
              className={s.arrowBtn}
            />
          </button>
        </Link>
        {dragon && (
          <>
            <div className={s.wrap}>
              <div className={s.topComponent}>
                <div>
                  <h2 className={s.name}>{dragon.name}</h2>
                  <p>{dragon.first_flight}</p>
                </div>
              </div>

              <ImageSwiper images={images} />
              <div className={s.downComponent}>
                <div className={s.textWikipedia}>
                  <a href={dragon.wikipedia} className={s.textWikipedia}>
                    wikipedia
                  </a>
                </div>
                <BtnOpenModal dragon={dragon} size={size} />
              </div>
            </div>
            <Outlet />
            <div />
          </>
        )}
      </div>
    </Container>
  );
};
export default DragonPageInfo;
