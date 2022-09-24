import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import s from './ImageSwiper.module.css';
export const ImageSwiper = ({ images }) => {
  return (
    <div className={s.wrap}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img src={el} alt="" width="320px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
