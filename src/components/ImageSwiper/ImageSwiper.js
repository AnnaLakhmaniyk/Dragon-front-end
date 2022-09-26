import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
} from 'swiper';
export const ImageSwiper = ({ images }) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
        className="mySwiper"
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img src={el} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
