import { useEffect, useState } from 'react';

import { getDragon } from '../../services/dragonApi';
import { ImageSwiper } from '../../components/ImageSwiper/ImageSwiper';
import { Container } from '../../components/Container/Container';
export const DragonView = () => {
  const [dradon, setDragon] = useState([]);
  const [page, setPage] = useState(0);
  const [images, setImage] = useState([]);
  console.log(page);
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
        <ImageSwiper images={images} />
        <div>
          <h2>{dradon.name}</h2>
          <p>{dradon.description}</p>
          <p>{dradon.dry_mass_kg}</p>
          <p>{dradon.dry_mass_lb}</p>
          <p>{dradon.first_flight}</p>
          <a href={dradon.wikipedia}>wikipedia</a>
        </div>
        <button onClick={() => setPage(1)}> Show more</button>
      </Container>
    </div>
  );
};
