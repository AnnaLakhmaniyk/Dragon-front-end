import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ImageSwiper } from '../ImageSwiper/ImageSwiper';
import { Container } from '../Container/Container';
import BtnOpenModal from '../BtnOpenModal/BtnOpenModal';
import { getDragonsById } from '../../services/dragonApi';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import s from './DragonPageInfo.module.css';

const DragonPageInfo = () => {
  const location = useLocation();
  const { dragonId } = useParams();
  const [dragon, setDragon] = useState({});
  const [images, setImages] = useState([]);
  const backHome = location?.state?.from || '/';
  useEffect(() => {
    getDragonsById(dragonId)
      .then(data => {
        setDragon(data.data);
        setImages(data.data.flickr_images);
      })
      .catch(error => console.log(error));
  }, [dragonId]);

  return (
    <Container>
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
                <BtnOpenModal
                  description={dragon.description}
                  name={dragon.name}
                  mase={dragon.dry_mass_kg}
                />
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
