import { useEffect, useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { getDragon } from '../../services/dragonApi';
import { ImageSwiper } from '../../components/ImageSwiper/ImageSwiper';
import { Container } from '../../components/Container/Container';
import BtnOpenModal from '../../components/BtnOpenModal/BtnOpenModal';

import s from './HomeView.module.css';
export const DragonView = () => {
  const [dragon, setDragon] = useState([]);
  const [page, setPage] = useState(0);
  const [images, setImage] = useState([]);
  useEffect(() => {
    getDragon()
      .then(data => {
        setDragon(data[page]);
        setImage(data[page].flickr_images);
      })
      .catch(error => console.log(error));
  }, [page]);
  return (
    <div>
      <Container>
        <div className={s.wrap}>
          <div className={s.topComponent}>
            <div>
              <h2 className={s.name}>{dragon.name}</h2>
              <p>{dragon.first_flight}</p>
            </div>
            <div className={s.wrapBtn}>
              <button
                type="button"
                className={s.button}
                onClick={() => setPage(0)}
              >
                <KeyboardDoubleArrowLeftIcon size="20" className={s.arrowBtn} />
              </button>

              <button
                type="button"
                className={s.button}
                onClick={() => setPage(1)}
              >
                <KeyboardDoubleArrowRightIcon
                  size="20"
                  className={s.arrowBtn}
                />
              </button>
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
      </Container>
    </div>
  );
};

export default DragonView;
